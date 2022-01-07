import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    html{
        --white: #ffffff;
        --black: #000000;

        --dark-primary: #050608;
        --dark-secondary: #171717;
        --dark-ternary: #222121;
        --dark-quaternary: #151515;
        --dark-quinary: #111111;

        --light-primary: #F8F8FB;
        --light-secondary: #F9FAFE;
        --light-ternary: #DFE3FA;


        --green-primary: #1FDE86;
        --red-primary: #EC5757;
        --orange-primary: #FF8F00;
        --yellow-primary: #ffe400;
        --blue-primary: #577BC1;
        --purple-primary: #7C5DFA;
    }
`

export default GlobalStyle;