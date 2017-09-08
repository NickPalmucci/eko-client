export function select(id) {
    return {
        type: 'VIEW_JOB',
        selected: id
    };
}

export function getJobs() {
    return {
        type: 'GET_JOBS_REQUESTED'
    };
}
