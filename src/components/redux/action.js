import { ADD_TODO_ITEM, MARK_AS_DONE, REMOVE_FROM_TODO } from "./constants";

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

export function markAsDone(item){
    console.log("Action", item)
    return {
        type:MARK_AS_DONE,
        data:item
    }
}
