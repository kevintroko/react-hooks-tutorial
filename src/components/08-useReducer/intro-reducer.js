const initialState = [
    {
        id: 1,
        toDo: 'Buy bread',
        done: false
    }
];

const toDoReducer = (state = initialState, action) => {
    if (action?.type === 'add') {
        return [ ...state, action.payload ];
    }
    
    return state;
}

let toDos = toDoReducer();

const newToDo = {
    id: 2,
    toDo: 'Buy milk',
    done: false
};

const addAction = {
  type: 'add',
  payload: newToDo  
};

toDos = toDoReducer(toDos, addAction);

console.log(toDos);