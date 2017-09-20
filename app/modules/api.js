import axios from 'axios';

export function getJobs() {
    return axios({
        method: 'get',
        url:'http://localhost:8000/jobs/',
        responseType: 'json',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    })
        .catch(function (error) {
            return error
        })

}

export function submitApplication(payload) {
    return axios({
        method: 'post',
        url:'http://localhost:8000/applications/',
        responseType: 'json',
        data: payload,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    })
        .catch(function (error) {
            return error
        })

}