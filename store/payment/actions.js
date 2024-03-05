import { createAction } from 'redux-actions';

export const paymentSignIn = {
  request: createAction('SEND_PAYMENT_REQUEST'),
  success: createAction('SEND_PAYMENT_SUCCESS'),
  failure: createAction('SEND_PAYMENT_FAILURE'),
};


