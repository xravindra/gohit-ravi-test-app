import { useState } from "react";
import {
  ProjectName,
} from "../helpers/constants";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmitClick() {
    console.log(username, password);
    fetch("url")
      .then((resp) => {
        if (resp.success === true) {

          alert("login successful");
        }
      }, (error) => {
        console.log(error);
      })
  }

  return (
    <div className="loginPage">
      <br />
      login page {ProjectName}
      <br />
      <br />

      <input name="username" value={username} onChange={(e) => handleUsernameChange(e)} />
      <br />
      <br />
      <input name="password" value={password} onChange={(e) => handlePasswordChange(e)} />

      <br />
      <br />
      <input type='submit' onClick={e => handleSubmitClick()} />
    </div>
  );
}

export default Login;