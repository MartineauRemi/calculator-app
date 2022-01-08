import styled, { css } from "styled-components";
import { MainColors } from "../../contexts/ThemeProvider";

interface ButtonProps{
    darkTheme: boolean;
    onClick?: (param: any) => any;
    color?: MainColors;
    background?: MainColors;
}

export const Button = styled.button<ButtonProps>`
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 0.5rem;
    padding: 1rem;
    transition: all .3s ease-in-out;
`

export const IconButton = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 1rem;

    .icon{
        font-size: 1.5rem;
    }

    span{
        margin-left: 1.5rem;
    }

    background-color: var(--white);

    &:hover{
        background-color: var(--light-ternary);
    }

    ${props => props.darkTheme && css`
        background-color: var(--dark-ternary);
        color: var(--white);
        
        &:hover{
            background-color: var(--dark-6);
        }
    `};
`

export const CalculatorButton = styled(Button)`
    padding: 1rem 2rem;
    font-size: 1.25rem;
    font-weight: 500;
    background-color: var(--white);

    &:hover{
        background-color: var(--light-ternary);
    }

    ${props => props.darkTheme && css`
        color: var(--white);
        background-color: var(--dark-ternary);

        &:hover{
            background-color: var(--dark-6);
        }
    `}

    ${props => props.color && css`
        color: ${`var(--${props.color}-primary)`};
    `}

    ${props => props.background && css`
        color: var(--white);
        background-color: ${`var(--${props.background}-primary)`};

        &:hover{
            background-color: ${`var(--${props.background}-secondary)`};
        }
    `}

    @media screen and (max-width: 374px){
        padding: 1rem;
    }
`