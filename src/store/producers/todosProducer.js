import { current_state } from "../currentstates/todosCurrentState"
import { ADD_ITEM } from "../actionTypes/todosActionTypes"
import { REMOVE_ITEM } from "../actionTypes/todosActionTypes"
const todosProducer = (state=current_state,action)=>{
    switch (action.type) {
        case ADD_ITEM:
            return {...state,todos:[...state.todos,action.payload]}
        case REMOVE_ITEM:
            return {...state,todos:[...state.todos.filter((item , id)=>{
                   return id !=action.payload
            })]}
        
        default:
            return state;
    }
}

export default todosProducer;