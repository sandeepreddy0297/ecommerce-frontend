import axios from "axios";

const BASE_URL="http://localhost:9017/user/";
export function regNewUser(user){
    console.log('Iam in  register action',user);
    var promise=axios.post(`${BASE_URL}register`,user);

    console.log(' register promise  -',promise);
    return{
        type:'REGISTER',
        payload:promise,
    }
}

export function logNewUser(user){
    console.log("iam in login action ",user);
var promise=axios.get(`${BASE_URL}login`,user);

    console.log("login promise  -",promise);
    return{
        type:"LOGIN",
        payload:promise
    }
}