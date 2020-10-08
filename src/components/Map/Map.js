import React, {useEffect, useRef, useState} from "react";
import TransitionsModal from "../UI/Modal";
import {YMaps, Map, GeolocationControl, Placemark, ZoomControl, SearchControl} from "react-yandex-maps";
import DefaultMap from "./DefaultMap";
import locIcon from '../../assets/images/locIcon.svg';
import style from './map.module.css';
import Wrapper from "../Wrapper";

export default function YandexMap(props) {
   const [location, setLocation] = useState();
   const [coors, setCoors] = useState();

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
         <DefaultMap location={setLocation} coors={setCoors}/>
         <TransitionsModal width={700} height={350} position={location} submit={handleSubmit}>
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
                  <SearchControl options={{float: 'right'}}/>
               </Map>
            </YMaps>
         </TransitionsModal>
      </div>
   )
}