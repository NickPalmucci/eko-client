import {REHYDRATE} from 'redux-persist/constants';

export default function exampleReducer(state, action) {
    if (state) {
        if (action.type === 'VIEW_JOB') {
            const active = state.ekoList[action.selected];
            return {
                ...state,
                selectedJob: active
            }
        }
        if (action.type === REHYDRATE) {
            return {
                ...state,
                ...action.payload.appReducer,
            }
        }
        if (action.type === 'GET_JOBS_SUCCEEDED') {
            return {
                ...state,
                ekoList: action.payload
            }
        }
        if (action.type === 'UPDATE_FORM') {
            return {
                ...state,
                formState: action.formState
            }
        }
        if (action.type === 'SUBMIT_REQUESTED') {
            return {
                ...state,
                submitStatus: 'requested'
            }
        }
        if (action.type === 'SUBMIT_SUCCESS') {
            return {
                ...state,
                submitStatus: 'success',
                submitMessage: action.message,
                showSubmit: true
            }
        }
        if (action.type === 'SUBMIT_FAILED') {
            return {
                ...state,
                submitStatus: 'failed',
                submitMessage: action.message,
                showSubmit: true
            }
        }
        if (action.type === 'HIDE_SUBMIT') {
            return {
                ...state,
                submitMessage: '',
                showSubmit: false
            }
        }
        return state
    }
    return null
};