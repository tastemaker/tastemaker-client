
import { 
    SET_ACCESS_TOKEN,
    SET_USER_AUTH_ERRORS 
} from '../action-constants/user';

export const reducerKey = 'user';

const initialState = {
    isAuthLoading: false,
    accessToken: null,
    userAuthErrors: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ACCESS_TOKEN:
            return Object.assign({}, state, { accessToken: action.payload });
        case SET_USER_AUTH_ERRORS:
            return Object.assign({}, state, { userAuthErrors: action.payload });
        default:
            return state;
    }
};
