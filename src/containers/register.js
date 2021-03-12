import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import{connect} from "react-redux";
import {regNewUser} from "../actions/index"
class Register extends Component {

    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            emailId: '',
            role: 'ROLE_CUSTOMER'

        }
        this.usernameRef=React.createRef();
        this.passwordRef= React.createRef();
        
        this.regbtn=React.createRef();
    }

    captureData = (event) =>{
        var name=event.target.name;
        var value=event.target.value;

         if(name == "username"){
              if(value == ""){
                  this.usernameRef.current.innerHTML="username required"
              }
              else
               {
                this.usernameRef.current.innerHTML=""
               }
               
         }
         if(name == "password"){
                 
          if(value == ""){
              this.passwordRef.current.innerHTML="Password required"
          }
          else
           {
            this.passwordRef.current.innerHTML=""
           }
           
     }
     
        this.setState({[name]:value});
    }
    registerUser = (event) => {

        event.preventDefault();
        console.log("userdata ... ", this.state);
        this.props.regNewUser(this.state);


    }

    render() {
        return (
            <React.Fragment>
                <form>
                    Username: <input type="text" onChange={this.captureData} name="username"></input>
                    <p style={ {color:'red'}} ref={this.usernameRef}></p><br></br><br></br>
                        
                         EmailId: <input type="text" onChange={this.captureData} name="emailId"></input><br></br><br></br>
                          Password: <input type="password"onChange={this.captureData} name="password"></input>
                         <p ref={this.passwordRef}></p><br></br><br></br>
                    <button onClick={this.registerUser}  ref={this.regbtn}>Register</button>

                </form>
            </React.Fragment>

        );
    }
}
function mapStateToProps(applicationState){
    console.log('applicationState',applicationState);

    return{isLoggedIn:applicationState.isUserLoggedIn};

}

function mapDispatchToProps(dispatch){
    return bindActionCreators({regNewUser:regNewUser},dispatch)
}

export default  connect(mapStateToProps,mapDispatchToProps)(Register);