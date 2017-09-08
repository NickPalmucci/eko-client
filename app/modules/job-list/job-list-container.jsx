import {connect} from 'react-redux';
import { select } from '../actions';
import {push} from 'redux-little-router';
import JobList from './job-list';

const mapStateToProps = state => {
    const jobList = state.appReducer.ekoList || state.appReducer.jobList || [];
    return {
        jobList: jobList,
    }
};

const listActions = {
    select,
    push
};

export default connect(mapStateToProps, listActions)(JobList)