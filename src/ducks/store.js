import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducers from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = createStore(rootReducers, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;
