export type ISaga = Generator<any, any, any>;

export type PostsState = {
  data: Object,
  error: boolean,
  loading: boolean,
};

export type PostsAction =
  | {
      type: 'REQUEST_ALL_POSTS',
    }
  | {
      type: 'REQUEST_POSTS_SUCCESS',
      payload: Array<any>,
    }
  | {
      type: 'REQUEST_POSTS_FAILED',
    };
