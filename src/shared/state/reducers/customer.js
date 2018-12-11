
import { SET_FOO } from '../action-constants/customer';

export const reducerKey = 'customer';

const initialState = {
    foo: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_FOO:
            return Object.assign({}, state, { foo: action.payload });
        default:
            return state;
    }
};
