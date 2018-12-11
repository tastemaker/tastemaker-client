import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import customerReducer, { reducerKey as customerReducerKey } from './customer';

export default (history) => combineReducers({
    router: connectRouter(history),
    [customerReducerKey]: customerReducer,
});
