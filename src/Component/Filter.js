import React from 'react'
import Button from '@material-ui/core/Button';

import {useDispatch} from 'react-redux'
import { filterTodos } from '../Redux/Actions/action'
const Filter = () => {
const dispatch = useDispatch()
    return (
        <div>
          <Button variant="contained" color="secondary" onClick={()=>dispatch(filterTodos("ShowAll"))}> ShowAll </Button>
          <Button variant="contained" color="secondary" onClick={()=>dispatch(filterTodos("ShowDone"))}> ShowDone </Button>
          <Button variant="contained" color="secondary" onClick={()=>dispatch(filterTodos("ShowNoDone"))}> ShowNoDone </Button>
        </div>
    )
}

export default Filter