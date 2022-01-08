import { Dispatch, ReactElement, SetStateAction, useReducer } from 'react'
import styled, { css } from 'styled-components'
import { MainColors, useThemeContext } from '../../contexts/ThemeProvider'
import { CALCULATOR_ACTIONS, formatInput, calculate } from '../../utils/Calculator'
import Keyboard from './Keyboard'

interface InnerProps{
    darkTheme: boolean;
    mainColor?: MainColors;
}

interface Props{
    setCustomMenuActive: Dispatch<SetStateAction<boolean>>;
}

function reducer(state: any, {type, payload}: any){
    switch(type){
        case CALCULATOR_ACTIONS.ADD_DIGIT: {
            if(state.lastAction === CALCULATOR_ACTIONS.CALCULATE) return {...state, currentInput: payload.digit, lastAction: CALCULATOR_ACTIONS.ADD_DIGIT}

            if(state.currentInput === '0'){
                if(payload.digit === '0') return state
                if(payload.digit === '.') return {...state, currentInput: `${state.currentInput}${payload.digit}`, lastAction: CALCULATOR_ACTIONS.ADD_DIGIT}
                return {...state, currentInput: payload.digit}
            }

            if(state.lastAction === CALCULATOR_ACTIONS.ADD_OPERATOR) return { ...state, currentInput: payload.digit, lastAction: CALCULATOR_ACTIONS.ADD_DIGIT}

            return state.currentInput.length < 15
                ? { ...state, currentInput: `${state.currentInput}${payload.digit}`, lastAction: CALCULATOR_ACTIONS.ADD_DIGIT}
                : {...state, lastAction: CALCULATOR_ACTIONS.ADD_DIGIT}
        }

        case CALCULATOR_ACTIONS.REMOVE_DIGIT: {
            if(state.currentInput === '0' || state.currentInput === '') return state
            if(state.lastAction === CALCULATOR_ACTIONS.CALCULATE || state.currentInput.length === 1) return {previousInput: '', currentInput: '0', operator: '', lastAction: ''}
            return {...state, currentInput: state.currentInput.slice(0, -1)}
        }

        case CALCULATOR_ACTIONS.CLEAR_ALL: {
            return {previousInput: '', currentInput: '0', operator: '', lastAction: ''}
        }

        case CALCULATOR_ACTIONS.ADD_OPERATOR: {
            if(state.previousInput === ''){
                return {
                    ...state, 
                    previousInput: state.currentInput,
                    operator: payload.operator,
                    lastAction: CALCULATOR_ACTIONS.ADD_OPERATOR
                }
            }

            if(state.previousInput === state.currentInput){
                return {
                    ...state,
                    operator: payload.operator,
                    lastAction: CALCULATOR_ACTIONS.ADD_OPERATOR
                }
            }

            let result = calculate(state)
            return {
                ...state,
                previousInput: result,
                currentInput: '',
                operator: payload.operator,
                lastAction: CALCULATOR_ACTIONS.ADD_OPERATOR
            }
        }

        case CALCULATOR_ACTIONS.CALCULATE: {
            if(state.previousInput === '' || state.currentInput === '' || state.operator === '') return state

            return {
                ...state,
                previousInput: '',
                currentInput: calculate(state),
                operator: '',
                lastAction: CALCULATOR_ACTIONS.CALCULATE
            } 
        }
        default:
            return state
    }
}

export default function Calculator({setCustomMenuActive}: Props): ReactElement {
    const { darkTheme, mainColor } = useThemeContext()
    const [{previousInput, currentInput, operator}, dispatch] = useReducer(reducer, {previousInput: '', currentInput: '0', operator: '', lastAction: ''})

    return (
        <Wrapper darkTheme={darkTheme} className='calculator'>
            <Screen darkTheme={darkTheme}>
                <PreviousInput>
                    {formatInput(previousInput)}
                    <Operator darkTheme={darkTheme} mainColor={mainColor}>{operator}</Operator>
                </PreviousInput>
                <CurrentInput>{formatInput(currentInput)}</CurrentInput>
            </Screen>
            <Keyboard dispatch={dispatch} setCustomMenuActive={setCustomMenuActive}/>
        </Wrapper>
    )
}

/*___styling___*/

const Wrapper = styled.section<InnerProps>`
    width: 23.4375rem;
    display: grid;
    row-gap: 1rem;
    border-radius: 1rem;
    overflow: hidden;
    transition: background-color .3s ease-in-out;
    padding: 1rem;
    background-color: var(--light-primary);
    box-shadow: 5px 5px 5px rgba(100,100,100,0.1), -2px -2px 5px rgba(100,100,100,0.1);
    
    .keyboard{
        align-self: flex-end;
    }

    ${props => props.darkTheme && css`
        background-color: var(--dark-secondary);
    `}

    @media screen and (max-width: 374px){
        width: 18.75rem;
    }
`

const Screen = styled.div<InnerProps>`
    transition: background-color .3s ease-in-out;
    border-radius: 1rem;
    background-color: var(--white);
    box-shadow: 1px 1px 5px rgba(100,100,100,0.1), -1px -1px 5px rgba(100,100,100,0.1);
    display: grid;
    overflow: hidden;


    ${props => props.darkTheme && css`
        background-color: var(--dark-quinary);
        box-shadow: none;
    `}
`

const PreviousInput = styled.p`
    font-size: 1rem;
    height: 3rem;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const CurrentInput = styled.p`
    font-size: 1.375rem;
    height: 3rem;
    padding: 0 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const Operator = styled.span<InnerProps>`
    color: ${props => props.mainColor}
`