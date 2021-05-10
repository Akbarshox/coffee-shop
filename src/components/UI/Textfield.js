import React, {useContext, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import {Store} from "../../Store";
import style from './textfield.module.css';

const useStyles = makeStyles((theme, state) => ({
   inputRoot: {
      fontSize: 12,
      color: '#fff',
      width: '95%',
      fontFamily: "Montserrat",
      "& .MuiOutlinedInput-notchedOutline": {
         borderWidth: "1px",
         borderColor: "rgba(255, 255, 255, 1)",
         fontSize: 12,
         height: 38
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
         borderWidth: "1px",
         borderColor: "#4B74FF",
         fontSize: 12,
      },
      "&.Mui-focused .MuiOutlinedInput": {
         borderWidth: "1px",
         borderColor: "#4B74FF"
      },
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
         borderColor: state => state.mode === 'dark' ? "#fff" : "#000",
         color: '#000'
      },
      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
         borderColor: "#4B74FF"
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
         borderColor: "#4B74FF"
      },
   },
   label: {
      fontSize: 12,
      color: '#fff'
   },
   icon: {
      color: 'white',
   },
   progress: {
      Width: 10,
      margin: "auto"
   },
   nested: {
      paddingBottom: -10,
      paddingLeft: theme.spacing(3),
      padding: theme.spacing(1),
   },
   select: {
      "&:before": {
         borderBottom: "1px solid orange"
      },
      "&:after": {
         borderBottom: `3px solid green`
      },
      "&:hover:not(.Mui-disabled):not(.Mui-focused):not(.Mui-error):before": {
         borderBottom: `2px solid purple`
      }
   },
   picker: {
      "& .MuiInputBase-root": {
         padding: 12,
         "& .MuiButtonBase-root": {
            padding: 0,
         },
         "& .MuiInputBase-input": {
            padding: 0,
            paddingBottom: 0,
         }
      }
   }
}));

export default function Input(props) {
   const {state} = useContext(Store);
   const classes = useStyles(state);
   let inputElement = null;

   switch (props.inputType) {
      case ('textField'):
         inputElement = <TextField
            key={props.key}
            variant={props.variant}
            size={props.size}
            name={props.name}
            error={props.error}
            type={props.type}
            disabled={props.disabled}
            value={props.value}
            autoFocus={props.autoFocus}
            required={props.required}
            autoComplete={props.autoComplete}
            label={props.label}
            placeholder={props.placeholder}
            onChange={props.onChange}
            inputRef={props.inputRef}
            prefix={props.prefix}
            defaultValue={props.defaultValue}
            SelectProps={{
               classes: {icon: classes.icon},
            }}
            style={props.style}
            className={classes.inputRoot}
            InputLabelProps={{className: style.label}}
         />
         break;
      case ('textArea'):
         inputElement = <textarea
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            id={props.id}
            style={props.style}
            className={style.textarea}
            placeholder={props.placeholder}
         />
   }

   return inputElement
}