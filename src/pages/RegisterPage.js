import styled from "styled-components";
import { buttonColor } from "../constants/colors";
import Logo from "../assets/images/BigLogo.png";

export default function RegisterPage() {
  return (
    <Main>
      <img src={Logo} />
      <input type="email" placeholder="email" />
      <input type="password" placeholder="senha" />
      <input type="text" placeholder="nome" />
      <input type="url" placeholder="imagem" />
      <button>Cadastrar</button>
      <p>Já tem uma conta? Faça login!</p>
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
