import React, {useContext, useEffect, useState} from 'react';
import ScrollMenu from "react-horizontal-scrolling-menu";
import Sticky from "./Sticky";
import style from './category.module.css';
import Wrapper from "../Wrapper";
import Button from "../UI/Button";
import {Store} from "../../Store";
import ScrollIntoView from "react-scroll-into-view";

export default function Category(props) {
   const [data, setData] = useState();
   const {state} = useContext(Store);
   const [active, setActive] = useState();

   useEffect(() => {
      if (state.food) {
         state.food.filter(function (data) {
            if (data.id === parseInt(props.match.params.id)) {
               return setData(data.categories);
            }
         })
      }
   }, [state.food, props.match.params.id])

   const states = {
      dragging: true,
      alignCenter: false,
      wheel: false,
      hideSingleArrow: true,
      scrollToSelected: true,
      scrollBy: 2,
   }
   const selected = (e) => {
      setActive(e);
   }

   if (data) {
      return (
         <Sticky>
            <div className={style.stickyInner}>
               <hr/>
               <Wrapper>
                  <ScrollMenu
                     {...states}
                     onSelect={(e) => selected(e)}
                     data={data.map((el, i) =>
                        <ScrollIntoView selector={el.id}>
                           <div className={style.scrollbar} key={i}>
                              <Button btnType="category">{el.name}</Button>
                           </div>
                        </ScrollIntoView>
                     )}
                  />
               </Wrapper>
               <hr/>
            </div>
         </Sticky>
      )
   } else {
      return 'loading'
   }
}