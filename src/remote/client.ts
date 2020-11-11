import axios from 'axios';

export const client = axios.create({
    baseURL: 'http://react-project-deployment.s3-website-us-west-2.amazonaws.com/index.html',
    headers: {
        'Content-Type': 'application/json'
    }
});