import React from "react";
import {NavLink,Route} from "react-router-dom";
import Login from "../containers/login";
import Home from "../containers/home";
import Register from "../containers/register"
class Navigation extends React.Component {
   
    render() { 
        return ( 
            <React.Fragment>
               <NavLink to="/">Home</NavLink> &nbsp;&nbsp;&nbsp;
               <NavLink to="/login">Login</NavLink> &nbsp;&nbsp;&nbsp;
               <NavLink to="/register">Register</NavLink> &nbsp;&nbsp;&nbsp;

               <Route path="/" exact component={Home}></Route>
               <Route path="/login" component={Login}></Route>
               <Route path="/register" component={Register}></Route>

            </React.Fragment>
         );
    }
}
 
export default Navigation;