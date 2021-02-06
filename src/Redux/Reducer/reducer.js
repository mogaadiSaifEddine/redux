import {AddTodo, DeletTodo, DoneTodo, EditTodo,FILTER,SaveTodo} from '../Constants/constants'
const initialState={
todos:[
    {id:0,edite:false,description:"Task1",isDone:false},
    {id:1,edite:false,description:"Task2",isDone:false}
],
filterr:'' 
}
export const reducer=(state=initialState,action)=>{
switch(action.type){
case AddTodo: return {...state,todos:[...state.todos,action.payload]};
case EditTodo: return {...state,todos:state.todos.map(el=>el.id===action.payload?{...el,edite:!el.edite}:el)};
case SaveTodo: return {...state,todos:state.todos.map(el=>el.id===action.payload.index?{...el,description:action.payload.editeText,edite:!el.edite}:el)};
case DeletTodo: return {...state,todos:state.todos.filter(el=>el.id!==action.payload)};
case DoneTodo: return {...state,todos:state.todos.map(el=>el.id===action.payload?{...el,isDone:!el.isDone}:el)}
case FILTER:return {...state,filter:action.payload}
    default : return state ;
}


}