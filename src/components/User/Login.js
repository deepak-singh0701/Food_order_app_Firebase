import React from 'react';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

export default function Login() {
    return (
        <div className="auth-wrapper">
        <div className="auth-inner">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top ">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>ReactMeals</Link>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to={"/login"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/signup"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <br/>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
            </div>
            </div>
        );
}
