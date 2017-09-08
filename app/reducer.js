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
                ...action.payload.appReducer
            }
        }
        if (action.type === 'GET_JOBS_SUCCEEDED') {
            return {
                ...state,
                ekoList: action.payload
            }
        }
        return state
    }
    return null
};