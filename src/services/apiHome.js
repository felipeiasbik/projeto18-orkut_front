import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

function createConfig(token){
    return {
        headers : {
            Authorization: `Bearer ${token}`
        }
    }
}

function homePage(token){
    const promise = axios.get("/timeline", createConfig(token));
    return promise;
}

const apiHome = { homePage };
export default apiHome;