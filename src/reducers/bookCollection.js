export function bookCollectionReducer(state = 0, action) {
    switch(action.type) {
        case "SET":
            state = action.payload
            return state
        case "ADD":
            return {
                total: state.total,
                items: [...state.items, ...action.payload.items]
            }
        case "DELETE":
            state = 0
            return state
        default:
            return state
    }
}