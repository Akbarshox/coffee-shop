import React, {useContext} from "react";
import TransitionsModal from "../../UI/Modal";
import Button from "../../UI/Button";
import style from './modal.module.css';
import {Store} from "../../../Store";

export default function CartModal(props) {
   const [open, setOpen] = React.useState(false);
   const {dispatch} = useContext(Store);

   const handleOpen = (e) => {
      setOpen(true);
      console.log(props)
      // return dispatch({type: 'ADD-TO-CART', payload: props})
   }
   const handleClose = () => {
      setOpen(false);
   };

   return (
      <div>
         <div className={style.button}>
            <Button btnType="order" clicked={handleOpen}>Добавить</Button>
         </div>
         <TransitionsModal open={open} handleClose={handleClose}>
            <div className={style.modal}>
               <img src={props.image} alt="image"/>
               <h2>{props.name}</h2>
               <h4>Количество</h4>
               <div className={style.price}>
                  <p>1</p>
                  <p>{props.price}</p>
                  <span><button>-</button><button>+</button></span>
               </div>
            </div>
         </TransitionsModal>
      </div>
   )
}