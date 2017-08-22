import {connect} from 'react-redux';
import * as actions from '../actions';
import JobDetail from './job-detail';

const mapStateToProps = state => {
    return {
        job: state.appReducer.selectedJob
    }
};

export default connect(mapStateToProps, actions)(JobDetail)