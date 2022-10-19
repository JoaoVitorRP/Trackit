import Header from "../components/Header";
import BottomNavbar from "../components/BottomNavbar";
import styled from "styled-components";
import { buttonColor } from "../constants/colors";
import { headerColor } from "../constants/colors";
import { backgroundColor } from "../constants/colors";

export default function HabitsPage() {
  return (
    <>
      <Header />
      <Main>
        <h1>Meus hábitos</h1>
        <button>+</button>
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      </Main>
      <BottomNavbar />
    </>
  );
}

const Main = styled.div`
  min-height: 100vh;
  background-color: ${backgroundColor};
  margin: 70px 0px;
  padding: 28px 17px 35px 17px;

  button {
    width: 40px;
    height: 35px;
    background-color: ${buttonColor};
    border: none;
    border-radius: 5px;

    font-size: 27px;
    color: ${backgroundColor};

    position: absolute;
    top: 92px;
    right: 17px;
  }
`;
