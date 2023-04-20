import { ADD_TODO_ITEM, REMOVE_FROM_TODO } from "./constants";
const initialState = []

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO_ITEM:
            return [
                ...state,
                action.data
            ]
        case REMOVE_FROM_TODO:
            // console.log("check is",state)
            let result=state.filter(item=>{
                // console.log("item is",item)
                // console.log("action data is",action);
                return item!=action.data
            })
            // console.log("result is",[...result])
            return [...result]
        default:
            return state
    }
}