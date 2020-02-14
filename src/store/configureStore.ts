// @flow
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import rootReducer from './rootReducer';

// import Reactotron from 'reactotron-react-native';

export default function configureStore(): any {
  const middlewares = [thunk];

  if (__DEV__) {
    const logger = createLogger();
    middlewares.push(logger);
    // middlewares.push(Reactotron.createEnhancer());
  }

  const enhancer = compose(applyMiddleware(...middlewares));

  return createStore(rootReducer, enhancer);
}
