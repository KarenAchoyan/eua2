import {handleActions} from 'redux-actions';
import {
    paymentSignIn,
} from './actions';

const initialState = {
    response:{},
    orders: [],
    isFetching: false,
    isAdding: false,
    isUpdating: false,
    isDeleting: false,
    error: [],
};


const paymentReducer = handleActions(
    {
        [paymentSignIn.success]: (state, {payload}) => ({
            ...state,
            response:payload,
            isInserting: true,
        }),

        [paymentSignIn.failure]: (state, {payload}) => ({
            ...state,
            isInserting: false,
            error: payload,
        }),
    },
    initialState
);

export default paymentReducer;
