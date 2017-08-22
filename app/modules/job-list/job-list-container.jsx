import {connect} from 'react-redux';
import * as actions from '../actions';
import {push} from 'redux-little-router';
import JobList from './job-list';

const mapStateToProps = state => {
    return {
        jobList: state.appReducer.jobData.jobList,
    }
};

const listActions = {
    ...actions,
    push
};

export default connect(mapStateToProps, listActions)(JobList)