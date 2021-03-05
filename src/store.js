import {createStore, combineReducers} from 'redux';
import searchReducer from './reducers/searchReducer';
import compareReducer from './reducers/compareReducer';
import selectReducer from './reducers/selectReducer';
const reducer = {
    search: searchReducer,
    compare: compareReducer,
    select: selectReducer
};

const store = createStore(combineReducers(reducer));

export default store;