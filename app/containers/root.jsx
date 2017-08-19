import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';
import {Fragment} from 'redux-little-router';
import Example from '../content/example/example-container';

export default class Root extends React.Component {
    static propTypes = {
        store: PropTypes.object.isRequired
    };

    render() {
        const {store} = this.props;
        return (
            <Provider store={store}>
                <Fragment forRoute="/">
                    <div>
                        <Fragment forRoute="/"><Example/></Fragment>
                        <Fragment forRoute="/other-page"><div>Other Page</div></Fragment>
                    </div>
                </Fragment>
            </Provider>
        );
    }
}
