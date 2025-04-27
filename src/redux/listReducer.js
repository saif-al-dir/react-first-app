// listsRedux.js
import shortid from 'shortid';

const ADD_LIST = 'app/lists/ADD_LIST';

// Action creator
export const addList = (title, description) => ({
    type: 'ADD_LIST',
    payload: { id: shortid(), title, description },
});

// Selector
export const getAllLists = state => state.lists;
export const getListById = (state, id) => state.lists.find(list => list.id === id);


const listsReducer = (statePart = [], action) => {
    switch (action.type) {
        case ADD_LIST:
            return [...statePart, { ...action.payload, id: shortid() }];
        default:
            return statePart;
    }
};

export default listsReducer;