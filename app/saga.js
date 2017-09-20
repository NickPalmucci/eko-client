import { call, put, takeLatest } from 'redux-saga/effects';
import { getJobs, submitApplication } from './modules/api';

function * getJobsList(action) {
    try {
        const jobs = yield call(getJobs);
        yield put({type: 'GET_JOBS_SUCCEEDED', payload: jobs.data.results})
    } catch(e) {
        yield put({type: 'GET_JOBS_FAILED', message: e.message})
    }
}

function * submitHandler(action) {
    try {
        const applicationStatus = yield call(submitApplication, action.payload);
        if (applicationStatus) {
            yield put({type: 'SUBMIT_SUCCESS', message: applicationStatus.message})
        }
    }catch(e) {
        yield put({type: 'SUBMIT_FAILED', message: e.message})
    }
}

export default function * rootSaga() {
    yield takeLatest('GET_JOBS_REQUESTED', getJobsList);
    yield takeLatest('SUBMIT_REQUESTED', submitHandler);
}