import React, { Component } from 'react'
import { BrowserRouter,Switch,Route} from "react-router-dom";
import Login from "./components/User/Login";
import SignUp from "./components/User/SignUp";
import Home from "./components/Home/Home";



export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path ="/login" component={Login}/>
            <Route exact path = "/signup" component ={SignUp}/>
            <Route exact path = "/home" component = {Home}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
