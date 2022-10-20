import { useContext, useState } from "react";
import styled from "styled-components";
import { buttonColor, disabledColor, disabledTextColor } from "../constants/colors";
import { DAYS } from "../constants/weekdays";
import { URL } from "../constants/apiLink";
import axios from "axios";
import { UserDataContext } from "../contexts/userData";
import { LoadingGIF } from "../constants/threeDots";

export default function AddHabitCard(props) {
  const { isHidden, setIsHidden, habitCardsList, setHabitCardsList } = props;

  const { userData } = useContext(UserDataContext);
  const { token } = userData;

  const [selectedDays, setSelectedDays] = useState([]);
  const [habitName, setHabitName] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  function pickSelectedDay(dayIndex) {
    let selectedDaysCopy = [...selectedDays];

    if (selectedDaysCopy.includes(dayIndex)) {
      selectedDaysCopy = selectedDaysCopy.filter((i) => i !== dayIndex);
    } else {
      selectedDaysCopy = [...selectedDays, dayIndex];
    }

    setSelectedDays(selectedDaysCopy);
  }

  function submitHabit() {
    setIsDisabled(true);

    const auth = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const body = {
      name: habitName,
      days: selectedDays,
    };

    if (habitName !== "" && selectedDays !== []) {
      const promise = axios.post(`${URL}/habits`, body, auth);
      promise.then((resp) => {
        setHabitCardsList([...habitCardsList, resp.data]);
        setIsHidden(true);
        setHabitName("");
        setSelectedDays([]);
        setIsDisabled(false);
        setErrorMsg("");
      });
      promise.catch((err) => console.log(err));
    } else {
      setErrorMsg("Favor preencher os campos!");
      setIsDisabled(false);
    }
  }

  return (
    <Card isHidden={isHidden} isDisabled={isDisabled}>
      <input
        placeholder="nome do hábito"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        disabled={isDisabled}
      />
      <h3>{errorMsg}</h3>
      <DaysButtons>
        {DAYS.map((d, index) => {
          return (
            <DayButton
              key={index}
              selectedDays={selectedDays}
              index={index}
              onClick={() => pickSelectedDay(index)}
              disabled={isDisabled}
            >
              {d}
            </DayButton>
          );
        })}
      </DaysButtons>
      <CancelButton onClick={() => setIsHidden(true)} disabled={isDisabled}>
        Cancelar
      </CancelButton>
      <SaveButton onClick={submitHabit} disabled={isDisabled}>
        {isDisabled ? LoadingGIF : "Salvar"}
      </SaveButton>
    </Card>
  );
}

const Card = styled.div`
  height: 180px;
  padding: 18px;
  background-color: #ffffff;
  border-radius: 5px;
  margin-bottom: 28px;

  display: ${(props) => (props.isHidden ? "none" : "flex")};
  flex-direction: column;

  position: relative;

  input {
    width: 100%;
    background-color: ${(props) => (props.isDisabled ? disabledColor : null)};

    font-size: 20px;
    color: ${(props) => (props.isDisabled ? disabledTextColor : null)};
  }
`;

const DaysButtons = styled.div`
  display: flex;
`;

const DayButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: ${(props) => (props.selectedDays.includes(props.index) ? "#CFCFCF" : "#FFFFFF")};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin-right: 4px;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};

  font-size: 20px;
  color: ${(props) => (props.selectedDays.includes(props.index) ? "#FFFFFF" : "#d4d4d4")};
`;

const GeneralButtonCSS = styled.button`
  height: 35px;
  border: none;
  border-radius: 5px;

  font-size: 16px;
  line-height: 20px;

  position: absolute;
  bottom: 18px;
`;

const CancelButton = styled(GeneralButtonCSS)`
  background-color: #ffffff;
  opacity: ${(props) => (props.disabled ? "0.7" : null)};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};

  color: ${buttonColor};

  right: 123px;
`;

const SaveButton = styled(GeneralButtonCSS)`
  width: 84px;
  background-color: ${buttonColor};
  opacity: ${(props) => (props.disabled ? "0.7" : null)};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};

  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;

  right: 18px;
`;
