
import { 
    SET_ACCESS_TOKEN,
    SET_USER_SIGNUP_ERRORS 
} from '../action-constants/user';

export const reducerKey = 'user';

const initialState = {
    accessToken: null,
    userSignupErrors: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ACCESS_TOKEN:
            return Object.assign({}, state, { accessToken: action.payload });
        case SET_USER_SIGNUP_ERRORS:
            return Object.assign({}, state, { userSignupErrors: action.payload });
        default:
            return state;
    }
};
