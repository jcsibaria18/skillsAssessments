import {takeLatest, put, call, all} from 'redux-saga/effects';
import postsApi from '../../../api/postsApi';
import type {ISaga} from '../types';
import {requestPostsFailed, requestPostsSuccess} from '../actionCreators';

export function* getApiPosts(): ISaga {
  try {
    const {data} = yield call(postsApi.getPosts);

    yield all([put(requestPostsSuccess(data.posts))]);
  } catch (e) {
    console.log('failed', e);
    yield all([put(requestPostsFailed({}))]);
  }
}

export default function* watcher(): any {
  yield takeLatest('REQUEST_ALL_POSTS', getApiPosts);
}
