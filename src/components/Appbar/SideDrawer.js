import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import YandexMap from "../Map/Map";
import style from './Appbar.module.css';
import SignIn from "../Auth/SignIn";
import user from '../../assets/images/user.svg';
import home from '../../assets/images/home.svg';
import cart from '../../assets/images/cart.svg';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
   list: {
      width: 250,
   },
   fullList: {
      width: 'auto',
   },
   menuButton: {
      marginRight: theme.spacing(1),
      marginLeft: -30,
      [theme.breakpoints.up('lg')]: {
         display: 'none',
      },
   },
}));

export default function SideDrawer() {
   const classes = useStyles();
   const [state, setState] = React.useState(false);

   const toggleDrawer = (side, open) => event => {
      setState(!state)
   };

   const sideList = side => (
      <div
         className={[classes.list, style.list].join(' ')}
         role="presentation"
         // onClick={toggleDrawer(side, false)}
         // onKeyDown={toggleDrawer(side, false)}
      >
         <div className={style.sidedrawerList}>
            <YandexMap/>
         </div>
         <div className={style.user}><img src={user} alt="user"/><SignIn/></div>
         <div className={style.user}><img src={home} alt="home"/><Link to="/">Главная</Link></div>
         <div className={style.user}><img src={cart} alt="cart"/><Link to="/">Корзина</Link></div>
         <h3>+998 77 555 00 00</h3>
      </div>
   );

   return (
      <div>
         <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
         >
            <MenuIcon/>
         </IconButton>
         <Drawer open={state} onClose={toggleDrawer(false)}>
            {sideList('left')}
         </Drawer>
      </div>
   );
}