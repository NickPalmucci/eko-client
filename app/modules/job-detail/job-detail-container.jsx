import {connect} from 'react-redux';
import * as actions from '../actions';
import JobDetail from './job-detail';

const sampleJob = {
    name: 'Sample',
    position: 'Fake',
    location: 'NYC',
    description: 'not much'
};

const mapStateToProps = state => {
    const job = state.appReducer.selectedJob || sampleJob;
    return {
        job: job
    }
};

export default connect(mapStateToProps, actions)(JobDetail)