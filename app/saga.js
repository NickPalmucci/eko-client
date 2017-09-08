import { call, put, takeLatest } from 'redux-saga/effects';
import { getJobs } from './modules/api';

function * getJobsList(action) {
    try {
        const jobs = yield call(getJobs);
        yield put({type: 'GET_JOBS_SUCCEEDED', payload: jobs.data.results})
    } catch(e) {
        yield put({type: 'GET_JOBS_FAILED', message: e.message})
    }
}

export default function * rootSaga() {
    yield takeLatest('GET_JOBS_REQUESTED', getJobsList)
}