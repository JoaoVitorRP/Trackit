import axios from "axios";
import { useContext, useState } from "react";
import styled from "styled-components";
import { URL } from "../constants/apiLink";
import { UserDataContext } from "../contexts/userData";

export default function TodayHabitsCards(props) {
  const { habit, doneHabits, setDoneHabits } = props;
  const { id, name, done, currentSequence, highestSequence } = habit;
  const { userData } = useContext(UserDataContext);
  const { token } = userData;

  const [sequence, setSequence] = useState(currentSequence);
  const [highest, setHighest] = useState(highestSequence);

  function checkOrUncheck(id) {
    let doneHabitsCopy = [...doneHabits];
    const auth = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    if (doneHabits.includes(id)) {
      const promise = axios.post(`${URL}/habits/${id}/uncheck`, id, auth);
      promise.then(() => {
        doneHabitsCopy = doneHabitsCopy.filter((i) => i !== id);
        setSequence(sequence - 1);
        (currentSequence === highestSequence)? setHighest(highest - 1) : setHighest(highestSequence);
        setDoneHabits(doneHabitsCopy);
      });
    } else {
      const promise = axios.post(`${URL}/habits/${id}/check`, id, auth);
      promise.then(() => {
        doneHabitsCopy = [...doneHabits, id];
        setSequence(sequence + 1);
        (currentSequence === highestSequence) ? setHighest(highest + 1) : setHighest(highestSequence);
        setDoneHabits(doneHabitsCopy);
      });
    }
  }

  return (
    <Habit doneHabits={doneHabits} habitId={id}>
      <h2>{name}</h2>
      <h5>
        Sequência atual:{" "}
        <Current doneHabits={doneHabits} habitId={id}>
          {sequence} {sequence === 1 ? "dia" : "dias"}
        </Current>
      </h5>
      <h5>
        Seu recorde:{" "}
        <Highest highest={highest} sequence={sequence} doneHabits={doneHabits} habitId={id}>
          {highest} {highest === 1 ? "dia" : "dias"}
        </Highest>
      </h5>
      <ion-button onClick={() => checkOrUncheck(id)}>
        <ion-icon name="checkbox"></ion-icon>
      </ion-button>
    </Habit>
  );
}

const Habit = styled.div`
  width: 100%;
  min-height: 94px;
  padding: 13px 95px 13px 13px;
  background-color: #ffffff;
  border-radius: 5px;
  margin-bottom: 10px;

  position: relative;

  ion-button {
    cursor: pointer;

    position: absolute;
    right: 6px;
    top: 6px;
  }

  ion-icon {
    font-size: 82px;
    color: ${(props) => (props.doneHabits.includes(props.habitId) ? "#8FC549" : "#ebebeb")};
  }
`;

const Current = styled.span`
  color: ${(props) => (props.doneHabits.includes(props.habitId) ? "#8FC549" : "#666666")};
`;

const Highest = styled.span`
  color: ${(props) => ((props.sequence >= props.highest && props.doneHabits.includes(props.habitId)) ? "#8FC549" : "#666666")};
`;
