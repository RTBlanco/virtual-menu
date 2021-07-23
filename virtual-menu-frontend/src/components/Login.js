import { useState } from "react";

const Login = ({login}) => {

  const [state, setState] = useState({
    username: "",
    password: "",
    checked: true
  })

  const handleOnchange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const toggle = () => {
    setState(prevState => {
      return {
        ...state,
        checked: !prevState.checked
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login(state)
  }

  return (
    <div className="login-area">
      <div className="login-card">
        <div className="login-header">
          Login
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" id="username" onChange={handleOnchange} />

          <label htmlFor="password">Password:</label>
          <input type={state.checked ? 'password' : 'text'} name="password" id="password" onChange={handleOnchange} />
          <div className="view-password-setting">
            <label htmlFor="show-password">Show password:</label>
            <input onChange={toggle} type="checkbox" name="show-password" id="show-password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>

  
  )
}


export default Login;