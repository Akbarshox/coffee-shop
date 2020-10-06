import React from "react";
import {YMaps, Map} from "react-yandex-maps";

export default function DefaultMap(props) {

   const getGeoLocation = (ymaps) => {
      ymaps.geolocation.get({
         provider: 'browser',
         autoReverseGeocode: true,
         useMapMargin: true
      }).then(function (result) {
         props.coors(result.geoObjects.position)
         ymaps.geocode(result.geoObjects.position).then(res => {
            let position = res.geoObjects.get(0).properties.getAll();
            props.location(position.text);
         })
      });
   };

   return (
      <div style={{display: 'none'}}>
         <YMaps query={{apikey: 'a611d201-19b9-4184-98c3-e7d6c4de6c1d'}}>
            <Map
               defaultState={{
                  center: [41.311081, 69.240562],
                  zoom: 10,
                  controls: [],
               }}
               modules={["geolocation", "geocode"]}
               onLoad={(ymaps) => getGeoLocation(ymaps)}
            >
            </Map>
         </YMaps>
      </div>
   )
}