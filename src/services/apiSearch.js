import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

function createConfig(token){
    return {
        headers : {
            Authorization: `Bearer ${token}`
        }
    }
}

function searchUser(params, token){
    const promise = axios.get(`/search/?name=${params}`, createConfig(token));
    return promise;
}

const apiSearch= { searchUser };
export default apiSearch;