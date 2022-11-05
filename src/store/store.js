import {compose , createStore , applyMiddleware} from 'redux';
import { rootReducer } from './root-reducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const persistConfig = {
    key : 'root',
    storage,
    whitelist : ['Song', 'Player'],
}


const persistedReducer = persistReducer(persistConfig, rootReducer)

// const middlewares = [process.env.NODE_ENV !== 'production' && logger , thunk].filter(Boolean);
const middlewares = [thunk];

const composedEnhancer = compose(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer , {} , composedEnhancer);

export const persistor = persistStore(store);

// store.subscribe(() => {
//     console.log(store.getState().Song['trackDetail']);
// })