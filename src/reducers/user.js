export default function(state =null,action){
    //console.log("iam in reducer---");
    switch(action.type){
        case "REGISTER":
            console.log("iam in register reducer")
            console.log('action.payload--',action.payload.data.token);
            
            if(action.payload.data.token){
            sessionStorage.setItem("token",action.payload.data.token)
            return true;
            }
            //return false;
            case "LOGIN":
                console.log("login reducer")
                console.log("action.payload---",action.payload.data);
                if(action.payload.data.token){
                    sessionStorage.setItem('token',action.payload.data.token);
                    return true;
                }
                return false;
         default :return state;   
    }
}