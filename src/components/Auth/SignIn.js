import React from 'react';
import TransitionsModal from "../UI/Modal";
import style from './auth.module.css';
import Button from "../UI/Button";
import {useAuth} from '../firebase';

export default function SignIn() {
   const [open, setOpen] = React.useState(false);
   const [pending, setPending] = React.useState(false);

   const [inputs, setInputs] = React.useState({});

   const auth = useAuth();
   const handleInputChange = (event) => {
      event.persist();
      setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
   };
   const onSignInSubmit = (event) => {
      event.preventDefault();
      console.log(inputs.number)
      auth.reCaptcha();
      auth.onSignInSubmit(inputs.number, inputs.name)
      setPending(true);
   }
   const onCodeSubmit = (event) => {
      event.preventDefault();
      auth.submitCode(inputs.code);
      console.log(inputs.code)
   }
   const handleOpen = () => {
      setOpen(true);
   }
   const handleClose = () => {
      setOpen(false);
   };

   return (
      <div>
         <p onClick={handleOpen} style={{fontWeight: 'bold'}} className={style.cursor}>Вход</p>
         <TransitionsModal open={open} handleClose={handleClose}>
            {
               pending === false ?
                  <div className={style.auth}>
                     <h1>Вход</h1>
                     <p>У Вас еще нет аккаунта в coffee-shop?</p>
                     <form onSubmit={onSignInSubmit}>
                        <input type="text" placeholder="Имя" name="name" value={inputs.name || ''}
                               onChange={handleInputChange}/>
                        <input type="text" placeholder="Номер телефона" name="number" value={inputs.number || ''}
                               onChange={handleInputChange}/>
                        <br/>
                        <Button btnType="auth">Получить код</Button>
                     </form>
                  </div>
                  :
                  <div className={style.auth}>
                     <h2>Подтверждение</h2>
                     <p>Вам прислали код на номер {inputs.number}</p>
                     <form onSubmit={onSignInSubmit}>
                        <input type="text" placeholder="Код" name="code" value={inputs.code || ''}
                               onChange={handleInputChange}/>
                        <br/>
                        <Button btnType="auth">Подтвердить код</Button>
                     </form>
                  </div>
            }
            <div id="recaptcha-container" style={{display: 'none'}}/>
         </TransitionsModal>
      </div>
   )
}