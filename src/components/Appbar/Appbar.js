import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SignIn from "../Auth/SignIn";
import {useAuth} from "../firebase";
import style from './Appbar.module.css';
import Wrapper from "../Wrapper";
import logo from '../../assets/images/logo.jpg';
import Account from "./Account";
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
   let user = useAuth().user

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
                  <YandexMap/>
                  {user ? <Account /> : <span className={style.link}><SignIn/></span> }

               </Toolbar>
            </Wrapper>
         </AppBar>
      </div>
   );
}