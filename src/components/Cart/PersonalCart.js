import React, {useContext, useState} from 'react';
import {Grid, TextField} from "@material-ui/core";
import {Store} from "../../Store";
import style from './cart.module.css';
import Button from "../UI/Button";
import cancel from '../../assets/images/cancelDelete.svg';
import Input from "../UI/Textfield";

export default function PersonalCart(props) {
   const {state, dispatch} = useContext(Store);
   const [inputs, setInputs] = useState({address: JSON.parse(localStorage.getItem('userData'))[0].location});

   const handleAddToCart = (e) => {
      return dispatch({type: 'ADD-TO-CART', payload: e})
   }
   const handleDeleteFromCart = (e) => {
      return dispatch({type: 'DECREMENT-FROM-CART', payload: e})
   }
   const removeFromCart = (e) => {
      return dispatch({type: 'REMOVE-FROM-CART', payload: e})
   }

   const handleChangeInputs = (e) => {
      const {name, value} = e.target;
      setInputs(inputs => ({...inputs, [name]: value}));
   }

   const personalDetails = [
      {
         label: "Ф.И.О",
         name: "name",
         value: "name"
      },
      {
         label: "Номер телефона",
         name: "phone",
         value: "phone"
      },
      {
         label: "Адресс",
         name: "address",
         value: "address"
      },
   ]

   const handleSubmit = () => {
      alert(JSON.stringify(inputs))
   }

   return (
      <div className={style.personalCart}>
         <Grid container>
            <Grid item xs={12} md={7} xl={7}>
               <h1>Корзина</h1>
               {state.addToCart.map(v =>
                  <div>
                     <div className={style.cartOrders}>
                        <img src={cancel} alt="" className={style.cancel} onClick={() => removeFromCart(v)}/>
                        <img src={v.image} alt="" className={style.imgCart}/>
                        <span>
                           <b>{v.name}</b>
                           <span className={style.count}>Количество: <p>{v.count}</p></span>
                           <span className={style.count}>Сумма: <p>{v.price * v.count}</p></span>
                        </span>
                        <span className={style.plusMinus}>
                           <Button btnType="PlusMinus" disabled={v.count <= 1}
                                   clicked={() => handleDeleteFromCart(v)}>-</Button>
                           <Button btnType="PlusMinus" clicked={() => handleAddToCart(v)}>+</Button>
                        </span>
                     </div>
                     <hr className={style.hr}/>
                  </div>
               )}
            </Grid>
         </Grid>
         {state.addToCart.length >= 1 ?
            <form>
               <h4>Оформление</h4>
               <Grid container style={{width: '80%'}}>
                  {personalDetails.map((v, i) =>
                     <Grid xs={12} md={3}>
                        <Input
                           key={i}
                           required={true}
                           inputType={'textField'}
                           variant={'outlined'}
                           label={v.label}
                           size="small"
                           name={v.name}
                           value={inputs[v.value]}
                           onChange={(e) => handleChangeInputs(e)}
                        />
                     </Grid>
                  )}
               </Grid>
               <Input
                  inputType={'textArea'}
                  placeholder={'Комментарий'}
                  onChange={(e) => handleChangeInputs(e)}
                  name={'comment'}
                  value={inputs.comment}
               />
               <p><Button btnType={'submit'} clicked={handleSubmit}>Оплата</Button></p>
            </form> : ''}
      </div>
   )
}