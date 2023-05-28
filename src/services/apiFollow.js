import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

function createConfig(token){
    return {
        headers : {
            Authorization: `Bearer ${token}`
        }
    }
}

function myfollowers(id, token){
    const promise = axios.get(`/follow/${id}`, createConfig(token));
    return promise;
}

function following(id, token){
    const promise = axios.get(`/following/${id}`, createConfig(token));
    return promise;
}

function followUser(body,token){
    const promise = axios.post(`/follow`, body, createConfig(token));
    return promise;
}

function unfollowUser(id,token){
    const promise = axios.delete(`/follow/${id}`, createConfig(token));
    return promise;
}

const apiFollow = { myfollowers, following, followUser, unfollowUser };
export default apiFollow;