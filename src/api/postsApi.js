import {Axios, AxiosResponse} from 'axios';
import api from 'api/';
import {POSTS} from './constants';

const postsServices = {
  getPosts: (): typeof AxiosResponse => api.get(POSTS.GET_POSTS),
};

export default postsServices;
