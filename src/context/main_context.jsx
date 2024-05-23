import { createContext, useContext, useReducer } from "react";
import reducer from '../reducer/main_reducer'
import axios from "axios";

const MainContext = createContext()


const initialState = {
    isLoading: false,
}


export const MainContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    
    return (
        <MainContext.Provider value={{...state}}>
            {children}
        </MainContext.Provider>
    )
}

export const useMainContext = () => {
    return useContext(MainContext)
}