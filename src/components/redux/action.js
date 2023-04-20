import { ADD_TODO_ITEM, REMOVE_FROM_TODO } from "./constants";

export function addToDoItem(item){
    return {
        type:ADD_TODO_ITEM,
        data:item
    }
}

export function removeFromToDo(item){
    return {
        type:REMOVE_FROM_TODO,
        data:item
    }
}
