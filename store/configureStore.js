import { createStore, combineReducers } from 'redux';
import listingsReducer from '../reducers/listings';

export default () => {
    const store = createStore(
        combineReducers({
            listings: listingsReducer,
        })
        );

    return store;
};