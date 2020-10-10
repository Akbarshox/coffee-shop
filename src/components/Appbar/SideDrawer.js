import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import YandexMap from "../Map/Map";
import style from './Appbar.module.css';

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
         className={classes.list}
         role="presentation"
         // onClick={toggleDrawer(side, false)}
         // onKeyDown={toggleDrawer(side, false)}
      >
         <div className={style.sidedrawerList}>
            <YandexMap/>
         </div>
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