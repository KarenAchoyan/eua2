import {takeLatest, call, put} from 'redux-saga/effects';
import {
    paymentSignIn,
} from './actions';
import axiosInstance from "configs/axiosIntance";


function* fetchSignInSaga({payload = {}}) {
    try {
        const response = yield call(() => axiosInstance.post('/payment/signIn', payload));
        const user = response.data;
        yield put(paymentSignIn.success(user));
    } catch (error) {
        yield put(paymentSignIn.failure(error.message));
    }
}

export function* paymentSaga() {
    yield takeLatest(paymentSignIn.request, fetchSignInSaga);
}
