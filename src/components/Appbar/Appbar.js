import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import style from './Appbar.module.css';
import Wrapper from "../Wrapper";
import logo from '../../assets/images/logo.jpg';
import {Link} from "react-router-dom";
import SideDrawer from "./SideDrawer";
import YandexMap from "../Map/Map";

const useStyles = makeStyles((theme) => ({
   appbar: {
      background: 'none',
      boxShadow: 'none',
      color: '#000',
      borderBottom: '1px solid #cacaca'
   },
   link: {
      [theme.breakpoints.down('md')]: {
         display: 'none',
      },
   }
}));

export default function ButtonAppBar() {
   const classes = useStyles();
   const [permission, setPermit] = useState('granted');

   navigator.permissions.query({name: 'geolocation'})
      .then((res) => {
         setPermit(res.state);
      })
   console.log(permission)
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
                  {permission === 'granted' ? <YandexMap/> : <p>Пожалуйста разрешите геолокацию</p>}
                  <span className={style.link}><Link to="" style={{fontWeight: 'bold'}}>Вход</Link>| <Link
                     to="">Регистраци</Link></span>
               </Toolbar>
            </Wrapper>
         </AppBar>
      </div>
   );
}