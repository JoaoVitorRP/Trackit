import Header from "../components/Header";
import BottomNavbar from "../components/BottomNavbar";
import styled from "styled-components";
import { buttonColor } from "../constants/colors";
import { backgroundColor } from "../constants/colors";
import AddHabitCard from "../components/AddHabitCard";
import { useState } from "react";

export default function HabitsPage() {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <>
      <Header />
      <Main>
        <h1>Meus hábitos</h1>
        <CreateCardButton onClick={() => setIsHidden(!isHidden)}>+</CreateCardButton>
        <AddHabitCard isHidden={isHidden} setIsHidden={setIsHidden}/>
        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
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
`;

const CreateCardButton = styled.button`
  width: 40px;
  height: 35px;
  background-color: ${buttonColor};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  font-size: 27px;
  color: ${backgroundColor};

  position: absolute;
  top: 92px;
  right: 17px;
`;