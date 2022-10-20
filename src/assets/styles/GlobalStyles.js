import { createGlobalStyle } from "styled-components";
import { headerColor } from "../../constants/colors";

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    input{
        width: 303px;
        height: 45px;
        padding: 10px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 8px;

        color: #666666;
    }

    h1, h2, h3, h4, h5, p, ::placeholder, button, input, div, span{
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
    }

    ::placeholder{
        font-size: 20px;
        color: #DBDBDB;
    }

    p{  
        margin-top: 28px;

        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }

    h1{
        font-size: 23px;
        color: ${headerColor};
        line-height: 29px;
    }

    h2{
        margin-bottom: 7px;

        font-size: 20px;
        line-height: 25px;
        color: #666666;
    }

    h3{
        font-size: 14px;
        color: #ff3333;
        margin: -5px 0px 8px 5px;
    }

    h4{ 
        margin-bottom: 8px;

        font-size: 20px;
        color: #666666;
    }

    h5, span{
        color: #666666;
        font-size: 15px;
        line-height: 16px;
    }
`;

export default GlobalStyles;
