import React, {createContext, useState} from "react";
import theme from "../component/theme";
import { IsClicked } from "./isClicked";

type ClickedContextType = {
    isClicked: Boolean,
    setIsClicked?: React.Dispatch<React.SetStateAction<Boolean>>
}

type ThemeContextProviderProps = {
    children: React.ReactNode
}

export const ClickedContext = createContext<ClickedContextType | Boolean>({} as ClickedContextType);

export const ThemeContextProvider = ({
    children,
    }: ThemeContextProviderProps) => {
        const [isClicked, setIsClicked] = useState<Boolean>(false);

    return( <ClickedContext.Provider value={{isClicked, setIsClicked}}>
        {
            children
        }
    </ClickedContext.Provider>)
}

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