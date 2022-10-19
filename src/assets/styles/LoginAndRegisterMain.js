import styled from "styled-components";
import { buttonColor, disabledColor, disabledTextColor, disabledOpacity } from "../../constants/colors";

const Main = styled.main`
  padding: 68px 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 33px;
  }

  input {
    background-color: ${(props) => (props.isDisabled ? disabledColor : null)};

    color: ${(props) => (props.isDisabled ? disabledTextColor : null)};
  }

  form {
    display: flex;
    flex-direction: column;
  }

  button {
    width: 303px;
    height: 45px;
    background-color: ${buttonColor};
    opacity: ${(props) => (props.isDisabled ? disabledOpacity : null)};
    border: none;
    border-radius: 5px;
    margin-bottom: 25px;
    cursor: ${(props) => props.isDisabled ? "default" : "pointer"};

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 21px;
    color: #ffffff;
  }

  p {
    font-size: 14px;
    color: ${buttonColor};
    text-decoration: underline;
  }
`;

export default Main;