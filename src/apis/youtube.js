import axios from 'axios';

const KEY = 'AIzaSyBDMDqj0N443A7xgEPekfzGtRNAv1jDq4w';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});