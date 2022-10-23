import styled from "styled-components";

import { headerColor } from "../constants/colors";
import Logo from "../assets/images/SmallLogo.png";
import { useContext } from "react";
import { UserDataContext } from "../contexts/userData";

export default function Header() {
  const { userData } = useContext(UserDataContext);
  const { image } = userData;

  return (
    <TopBanner>
      <img src={Logo} alt="Logo"/>
      <UserImg src={image} alt="Foto de perfil" data-identifier="avatar"/>
    </TopBanner>
  );
}

const TopBanner = styled.header`
  width: 100%;
  height: 70px;
  background: ${headerColor};
  padding: 0px 18px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

const UserImg = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 98.5px;
`;
