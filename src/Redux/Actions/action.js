import {AddTodo, DeletTodo, DoneTodo, EditTodo,FILTER,SaveTodo} from '../Constants/constants'
export const addTodo=(newTask)=>{
    return{type:AddTodo,payload:newTask} ;
}
export const editTodo=(id)=>{
    return{type:EditTodo,payload:id} ;
}
export const saveTodo=(p)=>{
    return{type:SaveTodo,payload:p} ;
}
export const deletTodo=(id)=>{
    return{type:DeletTodo,payload:id} ;
}
export const doneTodo=(id)=>{
    return{type:DoneTodo,payload:id} ;
}
export const filterTodos=(str)=>{
    return{
        type:FILTER, payload:str 
    }
}
