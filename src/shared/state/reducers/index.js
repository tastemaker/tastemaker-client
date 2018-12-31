import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import userReducer, { reducerKey as userReducerKey } from './user';

export default (history) => combineReducers({
    router: connectRouter(history),
    [userReducerKey]: userReducer,
});
