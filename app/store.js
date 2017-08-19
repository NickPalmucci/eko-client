import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import { routerForBrowser } from 'redux-little-router';
import appReducer from './reducer';
import {routes} from './routes'

const {reducer, middleware, enhancer} = routerForBrowser({routes});

export const clientStore = createStore(
    combineReducers({ router: reducer, appReducer }),
    {},
    compose(enhancer, applyMiddleware(middleware))
);