import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
   modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
   paper: {
      // backgroundColor: '#fff',
      // boxShadow: theme.shadows[5],
      // padding: theme.spacing(2, 4, 3),
      outline: 'none',
      marginLeft: -150
   },
   location: {
      [theme.breakpoints.down('sm')]: {
         display: 'none',
      },
      cursor: 'pointer'
   }
}));

export default function TransitionsModal(props) {
   const classes = useStyles();

   return (
      <div>
         <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={props.open}
            onClose={props.handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
               timeout: 500,
            }}
         >
            <Fade in={props.open}>
               <div className={classes.paper} style={{width: props.width, height: props.height}}>
                  {props.children}
               </div>
            </Fade>
         </Modal>
      </div>
   );
}