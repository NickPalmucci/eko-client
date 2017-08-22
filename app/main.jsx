import React from 'react';
import {render} from 'react-dom';
import Root from './containers/root';
import {clientStore} from './store';
import {initializeCurrentLocation} from 'redux-little-router';

const initialLocation = clientStore.getState().router;
if (initialLocation) {
    clientStore.dispatch(initializeCurrentLocation(initialLocation));
}

const el = document.getElementById('app');

function renderApp() {
    render(
        <Root store={clientStore}/>,
        el
    );
}

renderApp();