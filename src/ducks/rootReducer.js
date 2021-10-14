import {combineReducers} from 'redux';
import posts from './Posts/reducer';

const rootReducers = combineReducers({
  posts,
});

export default rootReducers;
