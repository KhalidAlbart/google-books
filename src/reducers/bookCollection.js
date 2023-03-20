export function bookCollectionReducer(state = 0, action) {
    switch(action.type) {
        case "SET":
            console.log('set')
            return action.payload
        case "ADD":
            console.log('add')
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