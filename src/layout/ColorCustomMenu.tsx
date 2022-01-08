import React, { useEffect, Dispatch, ReactElement, SetStateAction, useRef } from 'react'
import styled from 'styled-components'
import { Button } from '../components/buttons/Buttons'
import ColorPickerButton from '../components/buttons/ColorPickerButton'
import { MainColors, useThemeContext } from '../contexts/ThemeProvider'
import ThemeToggleButton from '../components/buttons/ThemeToggleButton'
import { FaPaintBrush } from 'react-icons/fa'
import { gsap } from 'gsap'

interface Props{
    customMenuActive: boolean;
    setCustomMenuActive: Dispatch<SetStateAction<boolean>>;
}

interface innerProps {
    darkTheme?: boolean;
}

export default function ColorCustomMenu({customMenuActive, setCustomMenuActive}: Props): ReactElement {
    const { darkTheme, mainColor } = useThemeContext()

    //modalRef is used for animation purpose with gsap
    const modalRef = useRef<any>()

    const onClickOnCloseButton = () => {
            gsap.fromTo(
                modalRef.current,
                {
                    x: '0'
                },
                {
                    x: '-100%',
                    duration: 0.3
                }
            )
        setTimeout(() => setCustomMenuActive(false), 500)
    }
    
    //toggle animation of the menu
    useEffect(() => {   
        if(!customMenuActive) return
        gsap.set(modalRef.current, {visibility: 'visible'})
        gsap.fromTo(
            modalRef.current,
            {
                x: '-100%',
            },
            {
                x: '0',
                duration: 0.3
            }
        )
    }, [customMenuActive])

    return (
        <Wrapper ref={modalRef} darkTheme={darkTheme}>
            <Content>
                <ThemeToggleButton />

                <Container className='color-picker' darkTheme={darkTheme}>
                <p><FaPaintBrush /><span>Choisissez une couleur</span></p>
                <List>
                    <li>
                        <ColorPickerButton color={MainColors.Red} />
                    </li>
                    <li>
                        <ColorPickerButton color={MainColors.Orange} />
                    </li>
                    <li>
                        <ColorPickerButton color={MainColors.Yellow} />
                    </li>
                    <li>
                        <ColorPickerButton color={MainColors.Green} />
                    </li>
                    <li>
                        <ColorPickerButton color={MainColors.Blue} />
                    </li>
                    <li>
                        <ColorPickerButton color={MainColors.Purple} />
                    </li>
                </List>
                </Container>
                <StyledButton darkTheme={darkTheme} onClick={onClickOnCloseButton} background={mainColor}>Fermer</StyledButton>
            </Content>
        </Wrapper>
    )
}

/*___styling___*/

const Wrapper = styled.div<innerProps>`
    position: fixed;
    top: 0;
    left: 0;
    visibility: hidden;
    z-index: 3;
    border-radius: 0.5rem;
    background-color: ${props => props.darkTheme ? 'var(--dark-secondary)' : 'var(--light-primary)'};
    box-shadow: 2px 2px 5px rgba(0,0,0,0.1), -1px -1px 2px rgba(0,0,0,0.1);
    transition: background-color .3s ease-in-out;
    height: 100vh;

    @media screen and (max-width: 1439px){
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .theme-toggle-button{
        width: 100%;
        height: 100%;
        height: 5.5rem;
        box-shadow: 2px 2px 5px rgba(100,100,100,0.1), -1px -1px 2px rgba(100,100,100,0.1);
    }
`

const Content = styled.div`
    position: relative;
    width: 350px;
    padding: 1rem;
    display: grid;
    row-gap: 1rem;
    
    p{
        width: 100%;
    }

    @media screen and (max-width: 374px){
        width: 320px;
    }
`

const Container = styled.div<innerProps>`
    background-color: ${props => props.darkTheme ? 'var(--dark-ternary)' : 'var(--white)'};
    width: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 2px 2px 5px rgba(100,100,100,0.1), -1px -1px 2px rgba(100,100,100,0.1);
    transition: color .3s ease-in-out;
    transition: background-color .3s ease-in-out;

    &.color-picker{
        p{
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: ${props => props.darkTheme ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)'};
        }

        span{
            margin-left: 1.5rem;
        }

        @media screen and (max-width: 374px){
            p{
                font-size: 0.875rem;
            }
        }
    }
`

const StyledButton = styled(Button)`
    background-color: ${props => `var(--${props.background}-primary)`};
    color: var(--white);
    font-weight: 700;

    &:hover{
        background-color: ${props => `var(--${props.background}-secondary)`};
    }
`

const List = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`