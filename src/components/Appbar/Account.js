import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import {useAuth} from "../firebase";
import user from '../../assets/images/user.svg';
import exit from '../../assets/images/exit.svg';

export default function SimpleMenu() {
   const [anchorEl, setAnchorEl] = React.useState(null);
   const auth = useAuth();

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };
   const handleOut = (e) => {
      auth.signout();
      // return dispatch({type: 'USER', payload: []})
   };
   return (
      <div>
         <Avatar aria-haspopup="true" onClick={handleClick} src={user}/>
         <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
         >
            {/*<MenuItem onClick={handleClose}>Profile</MenuItem>*/}
            <MenuItem>{auth.user.displayName}</MenuItem>
            <MenuItem onClick={handleOut}><Avatar src={exit} />Logout</MenuItem>
         </Menu>
      </div>
   );
}