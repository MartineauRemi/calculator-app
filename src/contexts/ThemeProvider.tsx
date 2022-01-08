import React, { Dispatch, ReactElement, SetStateAction, useContext, useState } from 'react'

interface IThemeContextProps {
    darkTheme: boolean;
    setDarkTheme: Dispatch<SetStateAction<boolean>>;
    mainColor: MainColors;
    setMainColor: Dispatch<SetStateAction<MainColors>>;
}

//variables defined in 'src/GlobalStyle.js'
export enum MainColors{
    Red = 'red',
    Orange = 'orange',
    Yellow = 'yellow',
    Green = 'green',
    Blue = 'blue',
    Purple = 'purple'
}

const ThemeContext = React.createContext<IThemeContextProps>({} as IThemeContextProps)
export const useThemeContext = () => useContext(ThemeContext)

export default function ThemeProvider({children}: any): ReactElement {
    const [darkTheme, setDarkTheme] = useState(true)
    const [mainColor, setMainColor] = useState(MainColors.Green)
   
    const providerValue = {
        darkTheme: darkTheme,
        setDarkTheme: setDarkTheme,
        mainColor: mainColor,
        setMainColor: setMainColor
    }

    return (
        <ThemeContext.Provider value={providerValue}>
            {children}
        </ThemeContext.Provider>
    )
}
