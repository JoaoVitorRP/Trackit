import Main from "../assets/styles/LoginAndRegisterMain";
import Logo from "../assets/images/BigLogo.png";
import { URL } from "../constants/apiLink";
import axios from "axios";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LoadingGIF } from "../constants/threeDots";
import { UserDataContext } from "../contexts/userData";
import { ProgressContext } from "../contexts/progress";

export default function LoginPage() {
  const [loginInfo, setLoginInfo] = useState();
  const [errorMsg, setErrorMsg] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const { signIn } = useContext(UserDataContext);
  const { getProgress } = useContext(ProgressContext);

  function login(event) {
    event.preventDefault();
    setIsDisabled(true);

    const promise = axios.post(`${URL}/auth/login`, loginInfo);
    promise.then((resp) => {
      signIn(resp.data);
      getProgress(resp.data);
    });

    promise.catch((err) => {
      setIsDisabled(false);
      if (err.response.status === 422) {
        setErrorMsg("Não encontramos este email!");
      } else if (err.response.status === 401) {
        setErrorMsg("Senha incorreta!");
      }
    });
  }

  return (
    <Main isDisabled={isDisabled}>
      <img src={Logo} alt="Logo" />
      <form onSubmit={login}>
        <input
          type="email"
          required
          placeholder="email"
          onChange={(e) => setLoginInfo({ ...loginInfo, email: e.target.value })}
          disabled={isDisabled}
          data-identifier="input-email"
        />
        {errorMsg === "Não encontramos este email!" ? <h3>{errorMsg}</h3> : null}
        <input
          type="password"
          required
          placeholder="senha"
          onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })}
          disabled={isDisabled}
          data-identifier="input-password"
        />
        {errorMsg === "Senha incorreta!" ? <h3>{errorMsg}</h3> : null}
        <button type="submit" disabled={isDisabled} data-identifier="login-btn">
          {isDisabled ? LoadingGIF : "Entrar"}
        </button>
      </form>
      <Link to="/cadastro" data-identifier="sign-up-action">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </Main>
  );
}
