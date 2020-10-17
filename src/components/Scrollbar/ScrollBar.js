import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import ScrollMenu from 'react-horizontal-scrolling-menu';
import {useAsync} from "react-async"
import style from './scrollbar.module.css';
import Wrapper from "../Wrapper";
import left from '../../assets/images/left.svg'
import right from '../../assets/scroll/right.svg';
import {Store} from "../../Store";

const loadData = async ({playerId}, {signal}) => {
   try {
      const res = await axios.get('/category.json', {signal});
      return res.data
   } catch (error) {
      throw new Error(error.statusText)
   }
}

export default function ScrollBar() {
   const {data, error, isPending} = useAsync({promiseFn: loadData});
   const {dispatch} = useContext(Store);
   const [active, setActive] = useState();

   const state = {
      dragging: true,
      alignCenter: true,
      wheel: false,
      hideSingleArrow: true,
      scrollToSelected: true,
      scrollBy: 2,
   }

   const selected = (e) => {
      dispatch({type: 'FILTER', payload: e});
      setActive(e);
   }

   if (isPending) return "loading"
   if (error) return `Something went wrong: ${error.message}`
   if (data) {
      return (
         <Wrapper>
            <div className={style.main}>
               <ScrollMenu
                  {...state}
                  onSelect={(e) => selected(e)}
                  arrowLeft={<div className={style.arrow}><img src={left} alt="<"/></div>}
                  arrowRight={<div className={style.arrow}><img src={right} alt=">"/></div>}
                  data={data.map((el, i) =>
                     <div className={style.scrollbar} key={el.id}>
                        <img src={el.image} alt="item" className={el.id === parseInt(active) ? style.active : ''} />
                        <p>{el.name}</p>
                     </div>
                  )}
               />
            </div>
            <hr className={style.hr}/>
         </Wrapper>
      )
   }
   ;
};