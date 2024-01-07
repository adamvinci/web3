import React, { useState } from "react";
const Context = React.createContext(null)


const ProviderWrapper = (props) => {

    const [theme, setTheme] = useState("white");

    const changeTheme = (theme) => {
        if (theme !== "white" && theme !== "black") throw "Invalid theme: " + theme;
        setTheme(theme)
    }
    const themeWhite = {
        backgroundColor: 'grey',
        primaryTextColor: 'black',
        linkColor: 'yellow'
    }
    const themeBlack = {
        backgroundColor: 'black',
        primaryTextColor: 'white',
        linkColor: 'green'
    }
    const getCurrentThemeDetails = () => {
        if (theme === "white") {
            return themeWhite
        }
        if (theme === "black") {
            return themeBlack
        }
    }
    const exposedValue = {
        theme,
        changeTheme,
        getCurrentThemeDetails
    }

    return <Context.Provider value={exposedValue}>
        {props.children}
    </Context.Provider>
}

export {
    Context,
    ProviderWrapper,
}    
