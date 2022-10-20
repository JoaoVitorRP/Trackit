import Header from "../components/Header";
import BottomNavbar from "../components/BottomNavbar";
import styled from "styled-components";
import { backgroundColor } from "../constants/colors";
import { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../contexts/userData";
import axios from "axios";
import { URL } from "../constants/apiLink";
import TodayHabitsCards from "../components/TodayHabitsCards";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

export default function TodayPage() {
  const { userData } = useContext(UserDataContext);
  const { token } = userData;

  const [todayHabits, setTodayHabits] = useState([]);
  const [doneHabits, setDoneHabits] = useState([]);

  useEffect(() => {
    const auth = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.get(`${URL}/habits/today`, auth);
    promise.then((resp) => {
      setTodayHabits(resp.data);
      let doneHabitsCopy = [...doneHabits];
      resp.data.forEach((h) => {
        h.done ? (doneHabitsCopy = [...doneHabitsCopy, h.id]) : (doneHabitsCopy = [...doneHabitsCopy]);
        setDoneHabits(doneHabitsCopy);
      });
    });
  }, []);

  function calculateCompleted() {
    const totalDone = Math.ceil((doneHabits.length / todayHabits.length) * 100);
    return <p>{totalDone}% dos hábitos concluídos</p>;
  }

  return (
    <>
      <Header />
      <Main doneHabits={doneHabits}>
        <h1>{dayjs().locale("pt-br").format("dddd, DD/MM")}</h1>
        {doneHabits.length === 0 ? <p>Nenhum hábito concluído ainda</p> : calculateCompleted()}
        {todayHabits.map((h) => {
          return <TodayHabitsCards key={h.id} habit={h} doneHabits={doneHabits} setDoneHabits={setDoneHabits} />;
        })}
      </Main>
      <BottomNavbar />
    </>
  );
}

const Main = styled.main`
  min-height: 100vh;
  background-color: ${backgroundColor};
  margin: 70px 0px;
  padding: 28px 17px 35px 17px;

  h1 {
    margin: 0px;
  }

  p {
    color: ${(props) => (props.doneHabits.length === 0 ? "#bababa" : "#8FC549")};
    margin-top: 5px;
    margin-bottom: 28px;
  }
`;
