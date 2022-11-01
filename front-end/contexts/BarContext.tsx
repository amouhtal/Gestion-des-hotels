import React, { useState, useEffect, createContext } from 'react';

// interface IThemeContext {
//     dark: boolean;
//     toggleDark: () => void;
// }

// const defaultState = {
//   dark: false,
// };

// type ThemeContextProviderProps = {
//     children: React.ReactNode
// }

// export const ThemeContext = createContext<Partial<IThemeContext>>({});

// // export default ThemeContext;

// export const ThemeContextProvider = ({
//     children,
//     }: ThemeContextProviderProps) => {
//         const [dark, setDark] = useState(defaultState.dark);
//         const toggleDark = () => {    
                    
//             setDark(!dark);
//           };

//     return( <ThemeContext.Provider value={{
//         dark,
//         toggleDark
//     }}>
//         {
//             children
//         }
//     </ThemeContext.Provider>)
// }

