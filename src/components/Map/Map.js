import React, {useState} from "react";
import TransitionsModal from "../UI/Modal";
import {YMaps, Map, GeolocationControl, Placemark, ZoomControl, SearchControl} from "react-yandex-maps";
import DefaultMap from "./DefaultMap";

export default function YandexMap(props) {
   const [location, setLocation] = useState();
   const [coors, setCoors] = useState('');

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
   const placemark = (ymaps) => {

   }
   const getGeoLocation = (ymaps) => {
      ymaps.geolocation.get({
         provider: 'browser',
         autoReverseGeocode: true,
         useMapMargin: true
      }).then(function (result) {
         ymaps.geocode(result.geoObjects.position).then(res => {
            let position = res.geoObjects.get(0).properties.getAll();
            setLocation(position.text);
         })
      });
   };

   return (
      <div>
         <DefaultMap location={setLocation} coors={setCoors}/>
         <TransitionsModal width={700} height={350} position={location}>
            <YMaps query={{apikey: 'a611d201-19b9-4184-98c3-e7d6c4de6c1d'}}>
               <Map
                  defaultState={{
                     center: coors,
                     zoom: 18,
                     controls: [],
                  }}
                  width={750}
                  height={400}
                  modules={["geolocation", "geocode"]}
               >
                  <GeolocationControl options={{float: 'right', noPlacemark: true}}
                                      data={{title: location}}
                                      onLoad={(ymaps) => getGeoLocation(ymaps)}
                                      instanceRef={(map) => handleClick(map)}
                  />
                  <Placemark geometry={coors} properties={{balloonContentHeader : location}}
                             options={{interactiveZIndex: true, draggable: true}} />
                  <ZoomControl options={{ float: 'right' }} />
                  <SearchControl options={{ float: 'right' }} />
               </Map>
            </YMaps>
         </TransitionsModal>
      </div>
   )
}