import React, { useState, useEffect, createContext } from 'react';

interface IThemeContext {
    dark: boolean;
    toggleDark: () => void;
}

const defaultState = {
  dark: false,
};

type ThemeContextProviderProps = {
    children: React.ReactNode
}

export const ThemeContext = createContext<Partial<IThemeContext>>({});

// export default ThemeContext;

export const ThemeContextProvider = ({
    children,
    }: ThemeContextProviderProps) => {
        const [dark, setDark] = useState(defaultState.dark);
        const toggleDark = () => {            
            setDark(!dark);
          };

    return( <ThemeContext.Provider value={{
        dark,
        toggleDark
    }}>
        {
            children
        }
    </ThemeContext.Provider>)
}

// import React, {createContext, useState} from "react";
// import theme from "../component/theme";
// import { IsClicked } from "./isClicked";

// interface IClickedContext {
//     isClicked: boolean,
//     toggleClick?: () => void;
// }

// type ThemeContextProviderProps = {
//     children: React.ReactNode
// }

// const defaultState = {
//     isClicked: false,
// };
  
// export const ClickedContext = createContext<IClickedContext>(defaultState);

// export const ThemeContextProvider = ({
//     children,
//     }: ThemeContextProviderProps) => {
//         const [isClicked, setisClicked] = useState(defaultState.isClicked);
//         const toggleClick = () => {
//             setisClicked(!isClicked);
//         };

//     return( <ClickedContext.Provider value={{isClicked,  toggleClick}}>
//         {
//             children
//         }
//     </ClickedContext.Provider>)
// }

// export const ThemeContextProvider = ({
//     children,
//     }: ThemeContextProviderProps) => {
//     return <ThemeContext.Provider value={theme}>
//         {
//             children
//         }
//     </ThemeContext.Provider>
// }
// class ThemeContextProvider extends Component {
//     state = { 
//         isLightTheme: true,
//         light: {syntax: '#555', ui: '#ddd', bg: '#eee'},
//         dark : {syntax: '#ddd', ui: '#333', bg: '#555'}
//      } 
//     render() { 
//         return (
//             <ThemeContext.Provider value={{...this.state}}>

//             </ThemeContext.Provider>
//         );
//     }
// }
 
// export default ThemeContextProvider;


 
// class ThemeContextProvider extends React.Component<Props, State> {
//     state = { 
//         isLightTheme: true,
//         light: {syntax: '#555', ui: '#ddd', bg: '#eee'},
//         dark : {syntax: '#ddd', ui: '#333', bg: '#555'}
//      } 
//     render() { 
//         return (
//             <ThemeContext.Provider value={{...this.state}}>

//             </ThemeContext.Provider>
//         );
//     }
// }
 
// export default ThemeContextProvider;