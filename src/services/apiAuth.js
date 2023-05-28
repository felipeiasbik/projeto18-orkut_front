import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

function createConfig(token){
    return {
        headers : {
            Authorization: `Bearer ${token}`
        }
    }
}

function signUp(body){
    const promise = axios.post("/signup", body);
    return promise;
}

function signIn(body){
    const promise = axios.post("/signin", body);
    return promise;
}


function logOut(token){
    console.log(token)
    const promise = axios.post("/logout", {}, createConfig(token));
    return promise;
}

const apiAuth = { signUp, signIn, logOut };
export default apiAuth;