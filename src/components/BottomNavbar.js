import { Link } from "react-router-dom";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { buttonColor } from "../constants/colors";
import { useContext } from "react";
import { ProgressContext } from "../contexts/progress";

export default function BottomNavbar() {
  const { progress } = useContext(ProgressContext);

  return (
    <Footer>
      <Link to="/habitos" data-identifier="habit-page-action">
        <SideButtons>Hábitos</SideButtons>
      </Link>
      <Link to="/hoje">
        <TodayButton>
          <CircularProgressbar
            value={progress}
            text={"Hoje"}
            styles={buildStyles({
              textSize: "22px",
              pathColor: "#FFFFFF",
              textColor: "#FFFFFF",
              trailColor: "transparent",
            })}
          />
        </TodayButton>
      </Link>
      <Link to="/historico" data-identifier="historic-page-action">
        <SideButtons>Histórico</SideButtons>
      </Link>
    </Footer>
  );
}

const Footer = styled.footer`
  width: 100%;
  height: 70px;
  background-color: #ffffff;
  padding: 0px 30px;
  box-shadow: 0px -4px 15px rgba(0, 0, 0, 0.15);

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 0;
`;

const SideButtons = styled.button`
  width: 90px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  font-size: 18px;
  color: ${buttonColor};
`;

const TodayButton = styled.button`
  width: 91px;
  height: 91px;
  background-color: ${buttonColor};
  border: none;
  border-radius: 100px;
  margin-bottom: 40px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;
