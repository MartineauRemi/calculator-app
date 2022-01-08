import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { MainColors, useThemeContext } from '../../contexts/ThemeProvider'

interface Props {
    color: MainColors;
}

interface InnerProps{
    color: MainColors;
    isSelected: boolean;
}

export default function ColorPickerButton({color}: Props): ReactElement {
    const { mainColor, setMainColor } = useThemeContext()
    const onClickColorPickerButton = () => setMainColor(color)
    
    return <Button color={color} onClick={onClickColorPickerButton} isSelected={color === mainColor}/>
}

const Button = styled.button<InnerProps>`
    cursor: pointer;
    border: none;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    background-color: ${props =>`var(--${props.color}-primary)`};
    transition: all .3s ease-in-out;
    
    &:hover{
        transform: scale(1.2);
    }
`