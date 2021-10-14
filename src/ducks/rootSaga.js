import {all} from 'redux-saga/effects';
import getPostsSaga from './Posts/saga';

export default function* rootSaga() {
  yield all([getPostsSaga()]);
}
