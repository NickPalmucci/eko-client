import {connect} from 'react-redux';
import * as actions from '../actions';
import Example from './example';

const mapStateToProps = state => {
    return {
        clicked: state.appReducer.clicked,
        count: state.appReducer.count
    }
};

export default connect(mapStateToProps, actions)(Example)