import React, { ReactElement } from 'react'
import { useThemeContext } from '../../contexts/ThemeProvider'
import { CalculatorButton } from './Buttons'
import { CALCULATOR_ACTIONS } from '../../utils/Calculator'
import useKeysPressed from '../../hooks/useKeysPressed'

interface Props {
    digit: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '.';
    dispatch: any;
}

export default function DigitButton({digit, dispatch}: Props): ReactElement {
    const { darkTheme } = useThemeContext()
    const onClickDigitButton = () => dispatch({ type: CALCULATOR_ACTIONS.ADD_DIGIT, payload: { digit } })

    useKeysPressed((value: string) => {
        if(value === digit)
            onClickDigitButton()
    })

    
    return (
        <CalculatorButton
            darkTheme={darkTheme}
            aria-label='calculator-digit'
            onClick={onClickDigitButton}
        >
            {digit}
        </CalculatorButton>
    )
}