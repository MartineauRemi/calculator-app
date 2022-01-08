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
        --dark-6: #323232;

        --light-primary: #F8F8FB;
        --light-secondary: #F9FAFE;
        --light-ternary: #DFE3FA;
        --light-quaternary: #EDEEF7;

        --red-primary: #EC5757;
        --red-secondary: #e96b6b;

        --orange-primary: #FF8F00;
        --orange-secondary: #fbbf70;

        --yellow-primary: #ffe400;
        --yellow-secondary: #fff388;

        --green-primary: #1FDE86;
        --green-secondary: #47fba7;

        --blue-primary: #577BC1;
        --blue-secondary: #7396dd;

        --purple-primary: #7C5DFA;
        --purple-secondary: #9f86ff;
    }
`

export default GlobalStyle;