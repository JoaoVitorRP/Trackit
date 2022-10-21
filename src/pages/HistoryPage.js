import styled from "styled-components";
import BottomNavbar from "../components/BottomNavbar";
import Header from "../components/Header";
import { backgroundColor } from "../constants/colors";

export default function HistoryPage() {
  window.scrollTo(0, 0);
  
  return (
    <>
      <Header />
      <Main>
        <h1>Histórico</h1>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
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
`;
