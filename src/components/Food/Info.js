import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from "../UI/Button";
import Menu from '@material-ui/core/Menu';
import style from "./food.module.css";

const StyledMenu = withStyles({
   paper: {
      background: '#f5f5f5',
      boxShadow: '0 2px 5px #ddd',
      width: 500,
      textAlign: 'center',
      borderRadius: 5,
      fontFamily: 'Calibri',
      marginTop: 2,
      padding: 1,
   },
})((props) => (
   <Menu
      getContentAnchorEl={null}
      anchorOrigin={{
         vertical: 'bottom',
         horizontal: 'center',
      }}
      transformOrigin={{
         vertical: 'top',
         horizontal: 'center',
      }}
      {...props}
   />
));

export default function Info(props) {
   const [anchorEl, setAnchorEl] = React.useState(null);

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   return (
      <div>
         <div className={style.button}>
            {props.description ? <Button btnType="auth" clicked={handleClick}>Информация о заведении</Button>
               : <Button btnType="auth">Информация о заведении</Button>
            }
         </div>
         <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            className={style.info}
         >
            <h4>Информация</h4>
            <p>{props.description}</p>
         </StyledMenu>
      </div>
   );
}