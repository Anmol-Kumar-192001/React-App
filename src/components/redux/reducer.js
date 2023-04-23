import { ADD_TODO_ITEM, MARK_AS_DONE, REMOVE_FROM_TODO } from "./constants";
const initialState = []

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO_ITEM:
          
            return [
                ...state,
                action.data
            ]
        case REMOVE_FROM_TODO:
            let result = state.filter(item => {
                return item.item !== action.data
            })
            return [...result]
        case MARK_AS_DONE: {
            const newState = JSON.parse(JSON.stringify(state))
            const item = newState[action.data.index]
            item.tick = action.data.tick
            console.log(newState)
            return newState
        }
            
        default:
            return state
    }
}