export function bookCollectionReducer(state = 0, action) {
    switch(action.type) {
        case "SET":
            state = action.payload
            return state
        case "ADD":
            console.log(action.payload.items, state['items'])
            state.items = [...state.items, ...action.payload.items]
            return state
        case "DELETE":
            state = 0
            return state
        default:
            return state
    }
}