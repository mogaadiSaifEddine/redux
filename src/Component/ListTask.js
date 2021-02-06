import React from 'react'
import {useSelector} from 'react-redux'
import Todo from './Task'
const TodoList=()=>{
  const list=useSelector((state)=>state.todos);
  const filter = useSelector((state) => state.filter)
  let result=[]
  if (filter==="ShowAll"){
      result=list
          }
          else if(filter==="ShowDone"){

          result=list.filter(todos=>todos.isDone===true) }

          else if(filter==="ShowNoDone"){

              result=list.filter(todos=>todos.isDone===false) }

  return (
     
      <div>
         {
          result.map(el=><Todo key={el.id} el={el}/>)
         }
      </div>
 
  )
}
export default TodoList