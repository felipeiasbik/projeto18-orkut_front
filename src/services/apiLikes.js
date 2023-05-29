import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

function createConfig(token){
    return {
        headers : {
            Authorization: `Bearer ${token}`
        }
    }
}

function likePosts(body, token){
    const promise = axios.post(`/likes`, body, createConfig(token));
    return promise;
}

function getLikes(token){
    const promise = axios.get(`/likes`, createConfig(token));
    return promise;
}

const apiLikes= { likePosts, getLikes };
export default apiLikes;