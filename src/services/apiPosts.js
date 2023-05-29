import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

function createConfig(token){
    return {
        headers : {
            Authorization: `Bearer ${token}`
        }
    }
}

function postImage(body, token){
    const promise = axios.post(`/postimage`, body, createConfig(token));
    return promise;
}

function postComent(body, token){
    const promise = axios.post(`/comments`, body, createConfig(token));
    return promise;
}

const apiPosts= { postImage, postComent };
export default apiPosts;