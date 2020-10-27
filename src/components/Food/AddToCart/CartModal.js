import React from "react";
import TransitionsModal from "../../UI/Modal";
import Button from "../../UI/Button";
import style from './modal.module.css';

export default function CartModal(props) {
   const [open, setOpen] = React.useState(false);

   const handleOpen = (e) => {
      setOpen(true);
      console.log(e)
   }
   const handleClose = () => {
      setOpen(false);
   };

   return (
      <div>
         <Button btnType="order" clicked={() => handleOpen(props)}>Добавить</Button>
         <TransitionsModal open={open} handleClose={handleClose}>
            <div className={style.modal}>
               {/*<img src="" alt="image"/>*/}
            </div>
         </TransitionsModal>
      </div>
   )
}