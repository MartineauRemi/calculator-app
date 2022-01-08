import React, { ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { useThemeContext } from '../../contexts/ThemeProvider'
import useKeysPressed from '../../hooks/useKeysPressed'
import { CALCULATOR_ACTIONS, CALCULATOR_OPERATORS } from '../../utils/Calculator'
import { CalculatorButton } from './Buttons'

interface Props {
    operator: CALCULATOR_OPERATORS
    dispatch: any;
    color?: string;
    background?: string;
}

export default function OperatorButton({operator, dispatch}: Props): ReactElement {
    const { darkTheme, mainColor } = useThemeContext()
    const onClickOperatorButton = () => dispatch({ type: CALCULATOR_ACTIONS.ADD_OPERATOR, payload: { operator } })


    //hook to enable operator inputs from keyboard
    useKeysPressed((value: string) => {
        let pressedOperator = ''

        //replace 'x' with '*' and '÷' with '/'
        switch(operator){
            case CALCULATOR_OPERATORS.MULTIPLICATION:
                pressedOperator = '*'
                break
            case CALCULATOR_OPERATORS.DIVISION:
                pressedOperator = '/'
                break
            case CALCULATOR_OPERATORS.ADDITION:
            case CALCULATOR_OPERATORS.SUBSTRACTION:
                pressedOperator = operator
                break
            default:
                break
        }

        if(value !== '' && value === pressedOperator)
            onClickOperatorButton()
    })

    return (
        <StyledCalculatorButton darkTheme={darkTheme} onClick={onClickOperatorButton} color={mainColor}>
            {operator}
        </StyledCalculatorButton>
    )
}

const StyledCalculatorButton = styled(CalculatorButton)`
    ${props => props.color && css`
        color: ${`var(--${props.color}-primary)`};
    `}
`