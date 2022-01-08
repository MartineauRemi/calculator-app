import { ReactElement } from 'react'
import { useThemeContext } from '../../contexts/ThemeProvider'
import { FiSun, FiMoon } from 'react-icons/fi'
import { IconButton } from './Buttons'

export default function ThemeToggleButton(): ReactElement {
    const { darkTheme, setDarkTheme } = useThemeContext()
    const onClickThemeToggleButton = () => setDarkTheme(!darkTheme)

    return (
        <IconButton darkTheme={darkTheme} className='theme-toggle-button' onClick={onClickThemeToggleButton}>
            {
                darkTheme
                    ? <FiSun className='icon'/>
                    : <FiMoon className='icon'/>
            }
            
            <span>Activer le mode {darkTheme ? 'clair' : 'sombre'}</span>
        </IconButton>
    )
}