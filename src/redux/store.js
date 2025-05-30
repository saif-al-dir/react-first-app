import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import listsReducer from './listReducer';
import columnsReducer from './columnsReducer';
import cardsReducer from './cardsReducer';
import searchStringReducer from './searchStringReducer';

// --- Selectors ---


// --- Action creators ---



// --- Combine reducers ---
const subreducers = {
    lists: listsReducer,
    columns: columnsReducer,
    cards: cardsReducer,
    searchString: searchStringReducer,
};

const reducer = combineReducers(subreducers);

// --- Create store ---
const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
