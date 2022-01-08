import React, { Dispatch, ReactElement, SetStateAction } from 'react'
import { IconButton } from './Buttons'
import { FaPaintBrush } from 'react-icons/fa'
import { useThemeContext } from '../../contexts/ThemeProvider'

interface Props{
    customMenuActive: boolean;
    setCustomMenuActive: Dispatch<SetStateAction<boolean>>;
}
export default function CustomMenuToggleButton({customMenuActive, setCustomMenuActive}: Props): ReactElement {
    const { darkTheme } = useThemeContext()

    const onClickButton = () => setCustomMenuActive(!customMenuActive)
    return (
        <IconButton className='custom-menu-toggle-button' darkTheme={darkTheme} onClick={onClickButton}>
            <FaPaintBrush />
        </IconButton>
    )
}
