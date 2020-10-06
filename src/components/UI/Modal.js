import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import style from "../Appbar/Appbar.module.css";
import location from "../../assets/images/location.svg";

const useStyles = makeStyles((theme) => ({
   modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
   paper: {
      backgroundColor: '#fff',
      boxShadow: theme.shadows[5],
      // padding: theme.spacing(2, 4, 3),
      outline: 'none'
   },
   location: {
      [theme.breakpoints.down('md')]: {
         display: 'none',
      },
   }
}));

export default function TransitionsModal(props) {
   const classes = useStyles();
   const [open, setOpen] = React.useState(false);

   const handleOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   return (
      <div>
         <div className={[classes.location, style.logo].join(' ')} onClick={handleOpen}
              style={{width: 230, flexGrow: 1}}>
            <img src={location} alt="location"/>
            {props.position === undefined ? <p>Адрес не указан</p> : <p>{props.position}</p>}
         </div>
         <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
               timeout: 500,
            }}
         >
            <Fade in={open}>
               <div className={classes.paper} style={{width: props.width, height: props.height}}>
                  {props.children}
               </div>
            </Fade>
         </Modal>
      </div>
   );
}