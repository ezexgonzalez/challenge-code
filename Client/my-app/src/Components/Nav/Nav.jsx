import React, {useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getInvertText, cleanError} from "../../app/Reducer/actions";
import {TextField, Button, Box, Alert} from "@mui/material";


const Nav = () => {

  const dispatch = useDispatch();
  // STATE GLOBLAL REDUX
  const data = useSelector((state)=> state.texts)
  // STATE LOCAL INPUT
  const [inputText, setInputText] = useState("");

  // HANDLE ON CHANGE INPUT TEXT
  const handleOnChange = (e) =>{
    setInputText(e.target.value);
  }
  // HANDLE ON SUBMIT BUTTON SEND
  const handleOnSumbit = () =>{
    dispatch(cleanError());
    dispatch(getInvertText(inputText));
  }

  return (
    <Box sx={{width:"100%",padding:"10px", backgroundColor:"#990033" , display:"flex",  alignItems:"center",gap:"10px" ,justifyContent:"center"}}>
    <TextField id="outlined-basic" sx={{width:"500px"}} onChange={handleOnChange} value={inputText}  label="Insert text" variant="outlined" size='small' />
      <Button onClick={handleOnSumbit} variant="contained">Send</Button>
      {data.error ? <Alert severity="error">You must enter text!</Alert> : null}
    </Box>
  )
}

export default Nav;