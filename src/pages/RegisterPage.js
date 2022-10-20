import Main from "../assets/styles/LoginAndRegisterMain";
import Logo from "../assets/images/BigLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { URL } from "../constants/apiLink";
import { LoadingGIF } from "../constants/threeDots";

export default function RegisterPage() {
  const [userInfo, setUserInfo] = useState();
  const [errorMsg, setErrorMsg] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();

  function signUp(event) {
    event.preventDefault();
    setIsDisabled(true);

    const promise = axios.post(`${URL}/auth/sign-up`, userInfo);
    promise.then(() => navigate("/"));

    promise.catch((err) => {
      setIsDisabled(false);
      if (err.response.status === 409) {
        setErrorMsg("Este email já se encontra cadastrado!");
      } else if (err.response.status === 422) {
        setErrorMsg("Insira um email válido!");
      }
    });
  }

  return (
    <Main isDisabled={isDisabled}>
      <img src={Logo} alt="Logo"/>
      <form onSubmit={signUp}>
        <input
          type="email"
          required
          placeholder="email"
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
          disabled={isDisabled}
        />
        {errorMsg !== "" ? <h3>{errorMsg}</h3> : null}
        <input
          type="password"
          required
          placeholder="senha"
          onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
          disabled={isDisabled}
        />
        <input
          type="text"
          required
          placeholder="nome"
          onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
          disabled={isDisabled}
        />
        <input
          type="url"
          required
          placeholder="imagem"
          onChange={(e) => setUserInfo({ ...userInfo, image: e.target.value })}
          disabled={isDisabled}
        />
        <button type="submit" disabled={isDisabled}>
          {isDisabled ? LoadingGIF : "Cadastrar"}
        </button>
      </form>
      <Link to="/">
        <p>Já tem uma conta? Faça login!</p>
      </Link>
    </Main>
  );
}
