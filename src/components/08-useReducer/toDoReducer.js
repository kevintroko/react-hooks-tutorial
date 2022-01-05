
export const toDoReducer = ( state = [], action ) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];
        case 'delete':
            return state.filter((toDo) => toDo.id !== action.payload);
        case 'toggle': 
            return state.map(toDo => {
                if (toDo.id === action.payload) {
                    return {
                        ...toDo,
                        done: !toDo.done
                    };
                } else {
                    return toDo;
                }
            });
        default:
            return state;
    }
}
