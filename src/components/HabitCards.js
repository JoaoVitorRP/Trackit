import styled from "styled-components";
import { DAYS } from "../constants/weekdays";

export default function HabitCards(props) {
  const { habitCardsList } = props;

  return habitCardsList.map((obj) => {
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

  display: flex;
  flex-direction: column;
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
