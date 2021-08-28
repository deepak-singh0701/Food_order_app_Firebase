import {React ,useRef, useState} from "react";
import { useAuth } from "../../store/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";

export default function SignUp(){

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
  
    async function handleSubmit(e) {
      e.preventDefault()
  
      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError("Passwords do not match")
      }
  
      try {
        setError("")
        setLoading(true)
        await signup(emailRef.current.value, passwordRef.current.value)
        history.push("/")
      } catch {
        setError("Failed to create an account")
      }
  
      setLoading(false)
    }

        return (

            <div className="auth-wrapper">
            <div className="auth-inner">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top ">
            <div className="container">
              <Link className="navbar-brand" to={"/sign-in"}>ReactMeals</Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav float-right">
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


            <form onSubmit={handleSubmit}>
                <h3>Sign Up</h3>
                
          <h2 className="text-center mb-4">Sign Up</h2>
                {error && <Alert variant="danger">{error}</Alert>}

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control"  placeholder="Enter email" name="Email" ref={emailRef}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control"  placeholder="Password"  ref={passwordRef}/>
                </div>

                <div className="form-group">
                    <label>Password Confirmation</label>
                    <input type="password" className="form-control"   placeholder="Re-Enter Password" ref={passwordConfirmRef} />
                </div>

                <br/>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/login">sign in?</a>
                </p>
            </form>
            </div>

            </div>

        );
    }