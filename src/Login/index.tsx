import { LoginAction, Pages, UserConfig } from "../types";
import { postApi } from "../api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./index.scss";

export default function LoginComponent(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  async function onSubmit(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    const response = await postApi(Pages.Login, {
      email: email,
      password: password,
    });

    const loginCredentials: LoginAction = response.body;
    // localStorage.setItem(
    //   UserConfig.AccessToken,
    //   loginCredentials.access_token
    // );
    // localStorage.setItem(UserConfig.EMail, loginCredentials.email);
    localStorage.setItem(UserConfig.Name, loginCredentials.name);
    // localStorage.setItem(UserConfig.Role, loginCredentials.role);

    navigate(Pages.Dashboard);
  }

  return (
    <div className="login">
      <div className="login login--container">
        <div className="header">Login</div>
        <form onSubmit={onSubmit}>
          <div className="login login--group">
            <div className="text text--bold">Email</div>
            <input
              className="input"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="login login--group">
            <div className="text text--bold">Password</div>
            <input
              className="input"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type="submit" className="button button--primary submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
