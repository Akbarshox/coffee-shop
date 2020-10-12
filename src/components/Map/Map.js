import React, {useEffect, useRef, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import TransitionsModal from "../UI/Modal";
import {Sugar} from "react-preloaders";
import {YMaps, Map, GeolocationControl, Placemark, ZoomControl, SearchControl, TypeSelector} from "react-yandex-maps";
import DefaultMap from "./DefaultMap";
import locIcon from '../../assets/images/locIcon.svg';
import style from './map.module.css';
import loca from "../../assets/images/location.svg";

const useStyles = makeStyles((theme) => ({
   location: {
      cursor: 'pointer'
   }
}));

export default function YandexMap(props) {
   const classes = useStyles();
   const [location, setLocation] = useState();
   const [coors, setCoors] = useState();
   const [open, setOpen] = React.useState(false);

   const handleOpen = () => {
      setOpen(true);
   }
   const handleClose = () => {
      setOpen(false);
   };

   const ref = useRef();

   const userData = [
      {
         location: location,
         coordinates: coors
      }
   ];

   useEffect(() => {
      return onPlacemark();
   }, [coors])

   const dragEvent = (event) => {
      setCoors(event.get('target').geometry.getCoordinates())
   }

   function onPlacemark(event) {
      if (ref.current !== undefined) {
         ref.current.geolocation.get({
            provider: 'browser',
            autoReverseGeocode: true,
            useMapMargin: true
         }).then(function (result) {
            ref.current.geocode(coors).then(function (res) {
               let data = res.geoObjects.get(0).properties.getAll();
               setLocation(data.text)
            });
         });
      }
   }

   const getGeoLocation = (ymaps) => {
      ref.current = ymaps
   };
   const geoControl = {
      options: {
         noPlacemark: false,
         float: 'right',
      },
      parameters: {
         adjustMargin: true
      }
   };
   const placeMark = {
      geometry: {
         type: "Point",
         coordinates: coors
      },
      options: {
         draggable: true,
         iconLayout: 'default#image',
         iconImageHref: locIcon,
         iconImageSize: [40, 40],
         useMapMarginInDragging: true,
         cursor: 'pointer',
         openBalloonOnClick: true,
      }
   };
   const searchControl = {
      options: {
         size: 'medium',
         float: 'right'
      }
   }

   function handleClick(map) {
      if (map) {
         map.events.add('locationchange', function (event) {
            let position = event.get('geoObjects').get(0).properties.getAll();
            let coordinates = event.get('position')
            setLocation(position.text);
            setCoors(coordinates);
         });
      }
   }

   const handleSubmit = () => {
      localStorage.setItem('userData', JSON.stringify(userData))
   }

   return (
      <div>
         <div className={[classes.location, style.logo].join(' ')}
              style={{width: 250, flexGrow: 1}}>
            <img src={loca} alt="location"/>
            {location === undefined ? <p>Адрес не указан разрешите геолокацию</p> :
               <p onClick={handleOpen}>{location}</p>}
         </div>
         <DefaultMap location={setLocation} coors={setCoors}/>
         <TransitionsModal open={open} handleClose={handleClose}>
            <YMaps query={{apikey: 'a611d201-19b9-4184-98c3-e7d6c4de6c1d'}}>
               <Map
                  defaultState={{
                     center: coors,
                     zoom: 17,
                     controls: [],
                  }}
                  modules={["geolocation", "geocode"]}
                  className={style.map}
               >
                  <GeolocationControl onLoad={(ymaps) => getGeoLocation(ymaps)}
                                      instanceRef={(map) => handleClick(map)}
                                      {...geoControl}
                  />
                  <Placemark {...placeMark}
                             onLoad={(e) => onPlacemark(e)}
                             onDragEnd={(e) => dragEvent(e)}
                  />
                  <ZoomControl options={{float: 'right'}}/>
                  <SearchControl options={{float: 'right'}} {...searchControl}/>
                  <TypeSelector options={{ float: 'left' }} />
               </Map>
            </YMaps>
            <div style={{opacity: 0.9}}>
               <div className={style.location}>{location}</div>
               <div onClick={() => setOpen(false)}>
                  <button onClick={handleSubmit} className={style.approve}>Подтвердить адрес</button>
               </div>
               <Sugar customLoading={false} color="#FFCD00"/>
            </div>
         </TransitionsModal>
      </div>
   )
}