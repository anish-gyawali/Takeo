import { useState, useContext } from "react";
import { UserContext } from "../components/context/UserContext";
import { useDispatch } from "react-redux";
import Input from "./common/Input";
import { userApiAction } from "../actions/userApiActions";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [disabledLoginBtn, setDisabledLoginBtn] = useState(true);
  const dispatch = useDispatch();

  const { login } = useContext(UserContext);

  const handleUsername = (e) => {
    setUsername(e.target.value);
    if (e.target.value && password) {
      setDisabledLoginBtn(false);
    } else if (!password || !e.target.value) {
      setDisabledLoginBtn(true);
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (username && e.target.value) {
      setDisabledLoginBtn(false);
    } else if (!username || !e.target.value) {
      setDisabledLoginBtn(true);
    }
  };

  const doLogin = () => {
    //login(username, password);
    dispatch(userApiAction());
  };

  return (
    <div className="container my-5 card py-5">
      <h3> User Login</h3>
      <Input
        label="Username"
        placeholder="Username"
        value={username}
        onChange={handleUsername}
      />
      <Input
        label="Password"
        placeholder="Password"
        type="password"
        value={password}
        onChange={handlePassword}
      />
      <div className="mb-3 row">
        <div className="col-md-3 offset-md-2">
          <button
            className="btn btn-primary"
            onClick={doLogin}
            disabled={disabledLoginBtn}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
