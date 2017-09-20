export function getJobs() {
    return {
        type: 'GET_JOBS_REQUESTED'
    };
}

export function select(id) {
    return {
        type: 'VIEW_JOB',
        selected: id
    };
}

export function updateForm(formState) {
    return {
        type: 'UPDATE_FORM',
        formState: formState
    }
}

export function submitApplication(formState) {
    return {
        type: 'SUBMIT_REQUESTED',
        payload: formState
    };
}

export function hideSnackBar() {
    return {
        type: 'HIDE_SUBMIT',
    }
}