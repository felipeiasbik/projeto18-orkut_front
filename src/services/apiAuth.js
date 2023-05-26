import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

function signUp(body){
    const promise = axios.post("/signup", body);
    return promise;
}

function signIn(body){
    const promise = axios.post("/signin", body);
    return promise;
}

const apiAuth = { signUp, signIn };
export default apiAuth;