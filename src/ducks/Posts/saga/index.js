import {all, fork} from 'redux-saga/effects';
import getPosts from './getPosts';

export default function* getPostsSaga() {
  yield all([fork(getPosts)]);
}
