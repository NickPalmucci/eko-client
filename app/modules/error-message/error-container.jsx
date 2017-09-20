import {connect} from 'react-redux';
import {hideSnackBar} from '../actions';
import ErrorSnackBar from './error';

const mapStateToProps = state => {
    const active = state.appReducer.showSubmit || false;
    const message = state.appReducer.submitMessage || '';

    return {
        active,
        message
    }
};

const mapDispatchToProps = {
    hideSnackBar
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorSnackBar)