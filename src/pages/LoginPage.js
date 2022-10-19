import styled from "styled-components";
import { buttonColor } from "../constants/colors";
import Logo from "../assets/images/BigLogo.png";

export default function LoginPage() {
  return (
    <Main>
      <img src={Logo} />
      <input type="email" placeholder="email" />
      <input type="password" placeholder="senha" />
      <button>Entrar</button>
      <p>Não tem uma conta? Cadastre-se!</p>
    </Main>
  );
}

const Main = styled.main`
  padding: 68px 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    width: 303px;
    height: 45px;
    background-color: ${buttonColor};
    border: none;
    border-radius: 5px;
    margin-bottom: 25px;

    font-size: 21px;
    color: #ffffff;
  }

  p {
    font-size: 14px;
    color: ${buttonColor};
    text-decoration: underline;
  }
`;
