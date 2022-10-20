import styled from "styled-components";
import { DAYS } from "../constants/weekdays";

export default function DaysButtons() {
  return (
    <DaysButtonsDiv>
      {DAYS.map((d, index) => {
        return(
            <button key={index}>{d}</button>
        )
      })}
    </DaysButtonsDiv>
  );
}

const DaysButtonsDiv = styled.div`
    display: flex;

    button{
        width: 30px;
        height: 30px;
        background-color: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-right: 4px;
        cursor: pointer;

        font-size: 20px;
        color: #D4D4D4;
    }
`