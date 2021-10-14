export const requestAllPosts = () => ({
  type: 'REQUEST_ALL_POSTS',
});

export const requestPostsSuccess = () => ({
  type: 'REQUEST_POSTS_SUCCESS',
  payload: data,
});

export const requestPostsFailed = () => ({
  type: 'REQUEST_POSTS_FAILED',
});
