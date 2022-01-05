
export const toDoReducer = ( state = [], action ) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];
        case 'delete':
            return state.filter((toDo) => toDo.id !== action.payload);
        default:
            return state;
    }
}
