import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SignIn from "../Auth/SignIn";
import style from './Appbar.module.css';
import Wrapper from "../Wrapper";
import logo from '../../assets/images/logo.jpg';
import Account from "./Account";
import SideDrawer from "./SideDrawer";
import YandexMap from "../Map/Map";
import search from '../../assets/scroll/search.svg';
import DefaultMap from "../Map/DefaultMap";

const useStyles = makeStyles((theme) => ({
   appbar: {
      background: 'none',
      boxShadow: 'none',
      color: '#000',
      borderBottom: '1px solid #cacaca'
   },
   link: {
      [theme.breakpoints.down('sm')]: {
         display: 'none',
      },
   }
}));

export default function ButtonAppBar() {
   const classes = useStyles();
   const [permission, setPermit] = useState('granted');
   let user = JSON.parse(localStorage.getItem('user'))

   useEffect(() => {
      navigator.permissions.query({name: 'geolocation'})
         .then((res) => {
            setPermit(res.state);
         })
   }, [permission])

   return (
      <div>
         <AppBar position="static" className={classes.appbar}>
            <Wrapper>
               <Toolbar>
                  <SideDrawer/>
                  <div className={style.logo}>
                     <img src={logo} alt="logo"/>
                  </div>
                  <Typography variant="h6" className={classes.title}>
                     Coffee-shop
                  </Typography>
                  <div className={style.support}>
                     Служба поддержки <br/> +998 77 555 00 00
                  </div>
                  <div className={style.input}>
                     <input type="text" placeholder="Поиск"/>
                     <div className={style.fade}/>
                  </div>
                  <div className={classes.link}><YandexMap/></div>
                  {user ? <Account/> : <span className={style.link}><SignIn/></span>}
                  <div className={style.inputMobile}>
                     <img src={search} alt="search"/>
                     <input type="text" name="search" placeholder="Search.." />
                  </div>
               </Toolbar>
            </Wrapper>
         </AppBar>
      </div>
);
}