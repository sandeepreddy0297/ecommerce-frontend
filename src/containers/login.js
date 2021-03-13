import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {logNewUser} from  "../actions/index"
class Login extends Component {
    constructor() {
        super();
        

        this.state = {
            password: "",
            emailId: "",
            role: "ROLE_CUSTOMER"
        }
    }
    captureData = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({ [name]: value });
    }
    loginUser = (event) => {

        event.preventDefault();
        console.log("userdata ... ", this.state);
        this.props.logNewUser(this.state);
        


    }

    render() {
        return (
            <React.Fragment>
                <form>
                    EmailId: <input type="text" onChange={this.captureData} name="emailId"></input><br></br><br></br>
                    Password: <input type="text" onChange={this.captureData} name="password"></input><br></br><br></br>


                    <button onClick={this.loginUser}>Login</button>

                </form>
            </React.Fragment>
        );
    }
}
function mapStateToProps(applicationState) {
    console.log('applicationState', applicationState);

    return { isLoggedIn: applicationState.isUserLoggedIn };

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ logNewUser: logNewUser }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);