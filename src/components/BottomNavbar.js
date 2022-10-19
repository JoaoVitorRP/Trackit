import styled from "styled-components";

import { buttonColor } from "../constants/colors";

export default function BottomNavbar() {
  return (
    <Footer>
      <SideButtons>Hábitos</SideButtons>
      <TodayButton>Hoje</TodayButton>
      <SideButtons>Histórico</SideButtons>
    </Footer>
  );
}

const Footer = styled.footer`
  width: 100vw;
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

  font-size: 18px;
  color: #ffffff;
`;
