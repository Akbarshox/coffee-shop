import React, {useContext} from "react";
import TransitionsModal from "../../UI/Modal";
import Button from "../../UI/Button";
import style from './modal.module.css';
import {Store} from "../../../Store";
import cancel from '../../../assets/images/cancel.svg';

export default function CartModal(props) {
   const [open, setOpen] = React.useState(false);
   const {state, dispatch} = useContext(Store);

   const handleOpen = (e) => {
      setOpen(true);
      return dispatch({type: 'ADD-TO-CART', payload: props})
   }
   const handleClose = () => {
      setOpen(false);
      // return dispatch({type: 'ADD-TO-CART', payload: []})
   };
   console.log(state.addToCart)
   return (
      <div>
         <div className={style.button}>
            <Button btnType="order" clicked={handleOpen}>Добавить</Button>
         </div>
         <TransitionsModal open={open} handleClose={handleClose}>
            <div className={style.modal}>
               <img src={props.image} alt="image" className={style.modalPic}/>
               <img src={cancel} alt="" className={style.cancel} onClick={handleClose}/>
               <h2>{props.name}</h2>
               <h4>Количество</h4>
               <div className={style.price}>
                  <p>1</p>
                  <p>{props.price}</p>
                  <span><Button btnType="PlusMinus">-</Button><Button btnType="PlusMinus">+</Button></span>
               </div>
            </div>
         </TransitionsModal>
      </div>
   )
}