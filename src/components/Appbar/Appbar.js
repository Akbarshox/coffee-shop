import React, {useContext, useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import SignIn from "../Auth/SignIn";
import style from './Appbar.module.css';
import Wrapper from "../Wrapper";
import logo from '../../assets/images/logo.jpg';
import Account from "./Account";
import SideDrawer from "./SideDrawer";
import YandexMap from "../Map/Map";
import search from '../../assets/scroll/search.svg';
import {Store} from "../../Store";

const useStyles = makeStyles((theme) => ({
   appbar: {
      background: 'none',
      boxShadow: 'none',
      color: '#000',
      borderBottom: '1px solid #cacaca',
      "& a": {
         textDecoration: 'none',
         color: '#000'
      }
   },
   link: {
      [theme.breakpoints.down('sm')]: {
         display: 'none',
      },
   }
}));

export default function ButtonAppBar(props) {
   const classes = useStyles();
   const {state} = useContext(Store);
   const [permission, setPermit] = useState('granted');
   const [searchResult, setSearchResult] = useState(null);
   const [searchItem, setSearchItem] = useState('');
   const [focus, setFocus] = useState(false);

   let user = JSON.parse(localStorage.getItem('user'))

   useEffect(() => {
      navigator.permissions.query({name: 'geolocation'})
         .then((res) => {
            setPermit(res.state);
         })
   }, [permission])
   useEffect(() => {
      if (state.data && state.data.length !== 0) {
         const result = (data) =>
            data.filter(
               i =>
                  i.name.toLowerCase().indexOf(searchItem.toLowerCase()) >= 0,
            );
         setSearchResult(result(state.data))
      }
   }, [state.data, searchItem]);
   const onFocus = e => {
      setFocus(true)
   }
   const onBlur = e => {
      setTimeout(() => {
         setFocus(false);
         setSearchItem('');
      }, 100)
   }

   return (
      <div>
         <AppBar position="static" className={classes.appbar}>
            <Wrapper>
               <Toolbar>
                  <SideDrawer/>
                  <Link to="/">
                     <div className={style.logo}>
                        <img src={logo} alt="logo"/>
                     </div>
                  </Link>
                  <Link to="/">
                     <Typography variant="h6" className={classes.title}>
                        Coffee-shop
                     </Typography>
                  </Link>
                  <div className={style.support}>
                     Служба поддержки <br/> +998 77 555 00 00
                  </div>
                  <div className={style.input}>
                     <input type="text" placeholder="Поиск" value={searchItem} onFocus={onFocus} onBlur={onBlur}
                            onChange={(e) => setSearchItem(e.target.value)}/>
                     <div className={style.fade}/>
                     <div style={focus === false ? {display: 'none'} : {display: 'flex'}}>
                        <div className={searchResult && searchItem ? style.searchResult : null}>
                           {searchResult && searchItem ? searchResult.map((e, i) =>
                              <Link to={`/restaurant/${e.id}`} key={i}>
                                 <li><img src={e.logo} alt=""/> {e.name}</li>
                              </Link>
                           ) : null}
                        </div>
                     </div>
                  </div>
                  <div className={classes.link}><YandexMap/></div>
                  {user ? <Account/> : <span className={style.link}><SignIn/></span>}
                  <div className={style.inputMobile}>
                     <img src={search} alt="search"/>
                     <input type="text" name="search" placeholder="Search.."
                            value={searchItem} onChange={(e) => setSearchItem(e.target.value)}/>
                  </div>
               </Toolbar>
            </Wrapper>
         </AppBar>
      </div>
   );
}