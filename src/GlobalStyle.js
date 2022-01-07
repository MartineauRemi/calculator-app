import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    html{
        --dark-primary: #050608;
        --dark-secondary: #171717;
        --dark-ternary: #222121;
        --dark-quaternary: #151515;
        --dark-quinary: #111111;

        --light-primary: #F8F8FB;
        --light-secondary: #F9FAFE;
        -light-ternary: #DFE3FA;

        --green-primary: #1FDE86;
    }
`

export default GlobalStyle;