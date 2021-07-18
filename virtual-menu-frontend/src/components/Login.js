import { useState } from "react";

const Login = ({login}) => {

  const [state, setState] = useState({
    username: "",
    password: ""
  })

  const handleOnchange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(state)
    login(state)
  }


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input type="text" name="username" id="username" onChange={handleOnchange} />

      <label htmlFor="password">Password:</label>
      <input type="text" name="password" id="password" onChange={handleOnchange} />
      <input type="submit"/>
    </form>
  )
}


export default Login;