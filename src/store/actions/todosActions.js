import { ADD_ITEM } from "../actionTypes/todosActionTypes"
import { REMOVE_ITEM } from "../actionTypes/todosActionTypes"

// actions
function AddItem(payload){
    return{
        type:ADD_ITEM,
        payload
    }
}

function RemoveItem(payload){
    return{
        type:REMOVE_ITEM,
        payload
    }
}
export {AddItem,RemoveItem}