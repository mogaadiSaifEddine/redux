import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Redux/Actions/action';
import TextField from '@material-ui/core/TextField';

const Addtodo=()=>{
    const [text,setText]=useState("");
    const dispatch=useDispatch();
    const add=()=>{
        dispatch(addTodo({id:Math.random(),edite:false,description:text,isDone:false}));
        setText("")
    }
         
    return(  
<div style={{display:'flex', flexDirection:'column'}}>
<div style={{display:'flex',justifyContent:'center'}}>
    
<form  onSubmit={(event) => {
        event.preventDefault();
        {add()};
      }}>
      <TextField variant="outlined" color="secondary" placeholder="Add New Task" margin="normal" value={text} onChange={(e)=>setText(e.target.value)}  />
    </form>
    </div>
    
</div>

    );
}

export default Addtodo