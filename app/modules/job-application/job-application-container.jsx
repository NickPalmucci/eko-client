import {connect} from 'react-redux';
import JobApplication from './job-application';
import {updateForm, submitApplication} from '../actions';

const mapStateToProps = state => {
    return {
        formState: state.appReducer.formState
    }
};

const mapDispatchToProps = {
    updateForm,
    submitApplication
};

export default connect(mapStateToProps, mapDispatchToProps)(JobApplication);