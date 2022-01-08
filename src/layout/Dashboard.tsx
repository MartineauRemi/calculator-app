import React, { ReactElement, ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { MainColors, useThemeContext } from '../contexts/ThemeProvider'

interface Props{
    children?: ReactNode;
}

interface MainProps {
    darkTheme: boolean;
    mainColor: MainColors;
}

export default function Dashboard({children}: Props): ReactElement {
    const { darkTheme, mainColor } = useThemeContext()
    return (
        <Main darkTheme={darkTheme} mainColor={mainColor}>
            {children}
        </Main>
    )
}


/*___styling___*/

const Main = styled.main<MainProps>`
    width: 100%;
    height: 100vh;
    position: relative;
    transition: all .3s ease-in-out;
    background-color: var(--light-quaternary);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${props => props.darkTheme && css`
        background-color: black;//var(--dark-quinary);
        color: var(--white);
    `};
`