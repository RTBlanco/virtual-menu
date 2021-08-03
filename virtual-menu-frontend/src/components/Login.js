import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ErrorMessage from "./ErrorMessage";

const Login = ({login, cred}) => {

  // todo: need make the message disapper in certian amount of time 

  const [state, setState] = useState({
    username: "",
    password: "",
  })

  const [checked, setChecked] = useState(false);

  const handleOnchange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const toggle = () => {
    setChecked(prev => !prev)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login(state)
  }

  const showError = () => {
    console.log('cred=> ',cred)
    if (!cred.valid) {
      return <ErrorMessage message={cred.error} />
    }
  }

  return (
    <>
      {showError()}
      <div className="login-area">
        <div className="login-card">
          <div className="login-header">
            Login
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" id="username" onChange={handleOnchange} />

            <label htmlFor="password">Password:</label>
            <input type={checked ? 'password' : 'text'} name="password" id="password" onChange={handleOnchange} />
            <div className="view-password-setting">
              <label htmlFor="show-password">Show password:</label>
              <input onChange={toggle} type="checkbox" name="show-password" id="show-password" />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  
  )
}


export default Login;