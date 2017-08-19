import React from 'react';
import {render} from 'react-dom';
import Root from './containers/root';
import {clientStore} from './store';

const el = document.getElementById('app');

function renderApp() {
    render(
        <Root store={clientStore}/>,
        el
    );
}

renderApp();