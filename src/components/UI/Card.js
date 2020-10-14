import React from 'react';
import style from './card.module.css';
import car from './../../assets/images/car.svg';

export default function Card(props) {
   return (
      <div className={style.card}>
         <div className={style.background}>
            <img src={props.image} alt=""/>
         </div>
         <div className={style.logo}>
            <img src={props.logo} alt="logo"/>
         </div>
         <div className={style.detail}>
            <h3>{props.name}</h3>
            <p>{props.title}</p>
            <span><img src={car} alt="car"/> {props.delivery === 'Бесплатно' ? <h5>{props.delivery}</h5> :
               <h5>{props.delivery} сум</h5>}</span>
         </div>
      </div>
   )
}