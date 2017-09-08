import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';
import {Fragment} from 'redux-little-router';
import AppLayout from './app-layout';
import {getJobs} from '../modules/actions';


export default class Root extends React.Component {
    static propTypes = {
        store: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.store.dispatch(getJobs())
    }

    render() {
        const {store} = this.props;
        return (
            <Provider store={store}>
                <Fragment forRoute="/">
                  <AppLayout/>
                </Fragment>
            </Provider>
        );
    }
}
