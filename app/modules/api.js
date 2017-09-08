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