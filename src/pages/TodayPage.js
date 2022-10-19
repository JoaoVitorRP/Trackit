import Header from "../components/Header";
import BottomNavbar from "../components/BottomNavbar";
import styled from "styled-components";
import { backgroundColor } from "../constants/colors";
import { headerColor } from "../constants/colors";

export default function TodayPage() {
  return (
    <>
      <Header />
      <Main>
        <h1>Segunda, 17/05</h1>
        <p>Nenhum hábito concluído ainda</p>
        <Habit>
          <h2>Ler 1 capítulo de livro</h2>
          <p>Sequência atual: 3 dias</p>
          <p>Seu recorde: 5 dias</p>
          <ion-icon name="checkbox"></ion-icon>
        </Habit>
        <Habit>
          <h2>Ler 1 capítulo de livro</h2>
          <p>Sequência atual: 3 dias</p>
          <p>Seu recorde: 5 dias</p>
          <ion-icon name="checkbox"></ion-icon>
        </Habit>
        <Habit>
          <h2>Ler 1 capítulo de livro</h2>
          <p>Sequência atual: 3 dias</p>
          <p>Seu recorde: 5 dias</p>
          <ion-icon name="checkbox"></ion-icon>
        </Habit>
        <Habit>
          <h2>Ler 1 capítulo de livro</h2>
          <p>Sequência atual: 3 dias</p>
          <p>Seu recorde: 5 dias</p>
          <ion-icon name="checkbox"></ion-icon>
        </Habit>
        <Habit>
          <h2>Ler 1 capítulo de livro</h2>
          <p>Sequência atual: 3 dias</p>
          <p>Seu recorde: 5 dias</p>
          <ion-icon name="checkbox"></ion-icon>
        </Habit>
        <Habit>
          <h2>Ler 1 capítulo de livro</h2>
          <p>Sequência atual: 3 dias</p>
          <p>Seu recorde: 5 dias</p>
          <ion-icon name="checkbox"></ion-icon>
        </Habit>
        <Habit>
          <h2>Ler 1 capítulo de livro</h2>
          <p>Sequência atual: 3 dias</p>
          <p>Seu recorde: 5 dias</p>
          <ion-icon name="checkbox"></ion-icon>
        </Habit>
        <Habit>
          <h2>Ler 1 capítulo de livro</h2>
          <p>Sequência atual: 3 dias</p>
          <p>Seu recorde: 5 dias</p>
          <ion-icon name="checkbox"></ion-icon>
        </Habit>
        <Habit>
          <h2>Ler 1 capítulo de livro</h2>
          <p>Sequência atual: 3 dias</p>
          <p>Seu recorde: 5 dias</p>
          <ion-icon name="checkbox"></ion-icon>
        </Habit>
        <Habit>
          <h2>Ler 1 capítulo de livro</h2>
          <p>Sequência atual: 3 dias</p>
          <p>Seu recorde: 5 dias</p>
          <ion-icon name="checkbox"></ion-icon>
        </Habit>
        <Habit>
          <h2>Ler 1 capítulo de livro</h2>
          <p>Sequência atual: 3 dias</p>
          <p>Seu recorde: 5 dias</p>
          <ion-icon name="checkbox"></ion-icon>
        </Habit>
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
    color: #bababa;
    margin-bottom: 28px;
  }
`;

const Habit = styled.div`
  width: 100%;
  min-height: 94px;
  padding: 13px 95px 13px 13px;
  background-color: #ffffff;
  border-radius: 5px;
  margin-bottom: 10px;

  position: relative;

  p {
    margin-bottom: 0px;

    font-size: 15px;
    line-height: 16px;
    color: #666666;
  }

  ion-icon {
    font-size: 82px;
    color: #ebebeb;

    position: absolute;
    right: 6px;
    top: 6px;
  }
`;
