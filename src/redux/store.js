import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from './reducers';
import logger from './middlewares/loggerMiddleware';
import error from './middlewares/errorMiddleware';
import rootSaga from './sagas/rootSaga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const middleware = [sagaMiddleware, logger, error];

  const enhancer = composeEnhancers(applyMiddleware(...middleware));

  const store = createStore(rootReducer, enhancer);

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
