import {compose , createStore , applyMiddleware} from 'redux';
import { rootReducer } from './root-reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middlewares = [logger,thunk];
const composedEnhancer = compose(applyMiddleware(...middlewares));
export const store = createStore(rootReducer , undefined , composedEnhancer);