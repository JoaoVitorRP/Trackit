import Header from "../components/Header";
import BottomNavbar from "../components/BottomNavbar";
import styled from "styled-components";
import { buttonColor } from "../constants/colors";
import { backgroundColor } from "../constants/colors";
import AddHabitCard from "../components/AddHabitCard";
import { useContext, useEffect, useState } from "react";
import HabitCards from "../components/HabitCards";
import { URL } from "../constants/apiLink";
import { UserDataContext } from "../contexts/userData";
import axios from "axios";

export default function HabitsPage() {
  const { userData } = useContext(UserDataContext);
  const { token } = userData;

  const [isHidden, setIsHidden] = useState(true);
  const [habitCardsList, setHabitCardsList] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.get(`${URL}/habits`, config);
    promise.then((resp) => {
      setHabitCardsList(resp.data);
    });
    promise.catch(() => alert("Ocorreu um erro, favor fazer login novamente!"));
  }, []);

  return (
    <>
      <Header />
      <Main>
        <h1>Meus hábitos</h1>
        <CreateCardButton onClick={() => setIsHidden(!isHidden)}>+</CreateCardButton>
        <AddHabitCard
          isHidden={isHidden}
          setIsHidden={setIsHidden}
          habitCardsList={habitCardsList}
          setHabitCardsList={setHabitCardsList}
        />
        {habitCardsList.length === 0 ? (
          <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        ) : (
          <HabitCards habitCardsList={habitCardsList} setHabitCardsList={setHabitCardsList}/>
        )}
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

  h1 {
    margin-bottom: 28px;
  }

  p {
    margin-top: 0px;
  }
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
