import React, { Dispatch, ReactElement, SetStateAction } from 'react'
import styled, { css } from 'styled-components'
import { CalculatorButton } from '../../components/buttons/Buttons'
import DigitButton from '../../components/buttons/DigitButton'
import OperatorButton from '../../components/buttons/OperatorButton'
import { useThemeContext } from '../../contexts/ThemeProvider'
import { CALCULATOR_ACTIONS, CALCULATOR_OPERATORS } from '../../utils/Calculator'
import { FiDelete } from 'react-icons/fi'
import { IoMdSettings } from 'react-icons/io'
import useKeysPressed from '../../hooks/useKeysPressed'

interface Props {
    dispatch: any;
    setCustomMenuActive: Dispatch<SetStateAction<boolean>>;
}

interface InnerProps{
    className?: string;
    darkTheme: boolean;
}

export default function Keyboard({dispatch, setCustomMenuActive}: Props): ReactElement {
    const { darkTheme, mainColor } = useThemeContext()

    const onClickSettingsButton = () => setCustomMenuActive(true)
    const onClickClearAllButton = () => dispatch({ type: CALCULATOR_ACTIONS.CLEAR_ALL })
    const onClickEqualsButton = () => dispatch({ type: CALCULATOR_ACTIONS.CALCULATE })
    const onClickDeleteButton = () => dispatch({ type: CALCULATOR_ACTIONS.REMOVE_DIGIT })

    useKeysPressed((value: string) => {
        switch(value){
            case 'Enter': {
                onClickEqualsButton()
                break
            }
            case 'Delete': {
                onClickClearAllButton()
                break
            }
            case 'Backspace': {
                onClickDeleteButton()
                break
            }
            default:
                break
        }   
    })

    return (
        <Wrapper className='keyboard' darkTheme={darkTheme}>
            <CalculatorButton darkTheme={darkTheme} color={mainColor} onClick={onClickSettingsButton}><IoMdSettings /></CalculatorButton>
            <CalculatorButton darkTheme={darkTheme} color={mainColor} onClick={onClickClearAllButton}>CA</CalculatorButton>
            <CalculatorButton darkTheme={darkTheme} color={mainColor} onClick={onClickDeleteButton}><FiDelete /></CalculatorButton>
            <OperatorButton operator={CALCULATOR_OPERATORS.ADDITION} dispatch={dispatch} />

            <DigitButton digit='7' dispatch={dispatch} />
            <DigitButton digit='8' dispatch={dispatch} />
            <DigitButton digit='9' dispatch={dispatch} />
            <OperatorButton operator={CALCULATOR_OPERATORS.SUBSTRACTION} dispatch={dispatch}/>

            <DigitButton digit='4' dispatch={dispatch}/>
            <DigitButton digit='5' dispatch={dispatch}/>
            <DigitButton digit='6' dispatch={dispatch}/>
            <OperatorButton operator={CALCULATOR_OPERATORS.MULTIPLICATION} dispatch={dispatch}/>

            <DigitButton digit='1' dispatch={dispatch}/>
            <DigitButton digit='2' dispatch={dispatch}/>
            <DigitButton digit='3' dispatch={dispatch}/>
            <OperatorButton operator={CALCULATOR_OPERATORS.DIVISION} dispatch={dispatch}/>
            

            <DigitButton digit='0' dispatch={dispatch}/>
            <DigitButton digit='.' dispatch={dispatch}/>
            <CalculatorButton className='double-width-button' darkTheme={darkTheme} background={mainColor} onClick={() => onClickEqualsButton()}>=</CalculatorButton>
            

        </Wrapper>
    )
}

/*___styling___*/

const Wrapper = styled.div<InnerProps>`
    display: grid;
    grid-template-columns: repeat(4, auto);
    width: 100%;
    border-radius: 1rem;
    overflow: hidden;
    background-color: var(--light-secondary);
    height: 50vh;
    row-gap: 0.125rem;
    column-gap: 0.125rem;
    transition: all .3s ease-in-out;
    box-shadow: 1px 1px 5px rgba(100,100,100,0.1), -1px -1px 5px rgba(100,100,100,0.1);


    .double-width-button{
        grid-column: 3 / 5;
    }

    ${props => props.darkTheme && css`
        background-color: #1C1C1C;
        box-shadow: none;
    `}
`
