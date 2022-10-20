import axios from "axios";
import { useContext, useState } from "react";
import styled from "styled-components";
import { URL } from "../constants/apiLink";
import { DAYS } from "../constants/weekdays";
import { UserDataContext } from "../contexts/userData";

export default function HabitCards(props) {
  const { habitCardsList, setHabitCardsList } = props;
  const { userData } = useContext(UserDataContext);
  const { token } = userData;
  const [itemToDelete, setItemToDelete] = useState();

  function deleteItem(id, habitIndex) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.delete(`${URL}/habits/${id}`, config);
    promise.then(() => {
      let habitCardsListCopy = [...habitCardsList];
      habitCardsListCopy = habitCardsListCopy.filter((i, index) => index !== habitIndex);
      setHabitCardsList(habitCardsListCopy);
      setItemToDelete()
    });
    promise.catch(() => alert("Ocorreu um erro, favor fazer login novamente!"));
  }

  return habitCardsList.map((obj, index) => {
    return (
      <HabitCard key={obj.id}>
        <h4>{obj.name}</h4>
        <DaysDivs>
          {DAYS.map((d, index) => {
            return (
              <DayDiv key={index} selectedDays={obj.days} index={index}>
                {d}
              </DayDiv>
            );
          })}
        </DaysDivs>
        <ion-button onClick={() => setItemToDelete(index)}>
          <ion-icon name="trash-outline"></ion-icon>
        </ion-button>
        <ConfirmDelete itemToDelete={itemToDelete} index={index}>
          <NoButton onClick={() => setItemToDelete()}>Cancelar</NoButton>
          <YesButton onClick={() => deleteItem(obj.id, index)}>Confirmar a exclusão</YesButton>
        </ConfirmDelete>
      </HabitCard>
    );
  });
}

const HabitCard = styled.div`
  width: 100%;
  min-height: 91px;
  padding: 15px 92px 15px 15px;
  background-color: #ffffff;
  border-radius: 5px;
  margin-bottom: 10px;

  word-wrap: break-word;

  display: flex;
  flex-direction: column;

  position: relative;

  ion-button {
    cursor: pointer;

    position: absolute;
    top: 15px;
    right: 15px;
  }

  ion-icon {
    font-size: 25px;
    color: #666666;
  }
`;

const DaysDivs = styled.div`
  display: flex;
`;

const DayDiv = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${(props) => (props.selectedDays.includes(props.index) ? "#CFCFCF" : "#FFFFFF")};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin-right: 4px;

  font-size: 20px;
  color: ${(props) => (props.selectedDays.includes(props.index) ? "#FFFFFF" : "#d4d4d4")};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ConfirmDelete = styled.div`
  width: 220px;
  height: 70px;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);

  display: ${(props) => props.itemToDelete === props.index ? "flex" : "none"};

  position: absolute;
  top: 10.5px;
  right: 15px;
`;

const GeneralButtonCSS = styled.button`
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  color: #ffffff;
`;

const NoButton = styled(GeneralButtonCSS)`
  background-color: #ed2939;
  margin-right: 10px;
`;

const YesButton = styled(GeneralButtonCSS)`
  background-color: #228c22;
`;
