import React from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import style from './scrollbar.module.css';
import Wrapper from "../Wrapper";
import left from '../../assets/images/left.svg'
import right from '../../assets/scroll/right.svg';
import {Items} from "./Items";

export default function ScrollBar() {
   const state = {
      dragging: true,
      alignCenter: true,
      wheel: false,
      hideSingleArrow: true,
      scrollToSelected: true,
      scrollBy: 2,
   }
   return (
      <Wrapper>
         <div className={style.main}>
            <ScrollMenu
               {...state}
               arrowLeft={<div className={style.arrow}><img src={left} alt="<"/></div>}
               arrowRight={<div className={style.arrow}><img src={right} alt=">"/></div>}
               data={Items.map((el, i) =>
                  <div className={style.scrollbar} key={i}><img src={el.image} alt="item"/></div>
               )}
            />
         </div>
         <hr className={style.hr}/>
      </Wrapper>
   );
};