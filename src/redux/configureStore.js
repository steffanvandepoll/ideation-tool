import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { Stickies } from './stickies';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            stickies: Stickies
        }),
        applyMiddleware(thunk)
    );
    return store;
}
