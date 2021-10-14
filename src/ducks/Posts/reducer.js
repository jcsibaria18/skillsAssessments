import {PostsState, PostsAction} from './types';

const INITIAL_STATE = {
  loading: false,
  error: false,
  data: [],
};

const posts = (
  state: PostsState = INITIAL_STATE,
  action: PostsAction,
): PostsState => {
  switch (action.type) {
    case 'REQUEST_ALL_POSTS':
      return {
        ...state,
        loading: true,
        error: false,
      };
    case 'REQUEST_POSTS_SUCCESS':
      return {
        loading: false,
        error: false,
        data: action.payload,
      };
    case 'REQUEST_POSTS_FAILED':
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default posts;
