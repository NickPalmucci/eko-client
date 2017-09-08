import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore} from 'redux-persist';
import { routerForBrowser } from 'redux-little-router';
import rootSaga from './saga';
import appReducer from './reducer';
import {routes} from './routes';
import jobList from './sample-data.json';

const {reducer, middleware, enhancer} = routerForBrowser({routes});

const sagaMiddleware = createSagaMiddleware();

export const clientStore = createStore(
    combineReducers({ router: reducer, appReducer }),
    {appReducer: {jobList: jobList}},
    compose(enhancer,
        applyMiddleware(middleware, sagaMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

persistStore(clientStore);

sagaMiddleware.run(rootSaga);