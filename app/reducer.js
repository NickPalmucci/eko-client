import jobData from './sample-data.json';

export default function exampleReducer(state, action) {
    if (state) {
        if (action.type === 'VIEW_JOB') {
            const active = state.jobData.jobList[action.selected];
            return {
                ...state,
                selectedJob: active
            }
        } else return state
    } else return {jobData: jobData}
};