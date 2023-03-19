export function setCollection(data) {
    return {
        type: "SET",
        payload: data
    }
}

export function addCollection(data) {
    return {
        type: 'ADD',
        payload: data
    }
}

export function deleteCollection() {
    return {
        type: "DELETE"
    }
}