import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-39633.cloudfunctions.net/api'

    // 'http://localhost:5001/clone-39633/us-central1/api'  //THE API (cloud function) URL
});

export default instance;