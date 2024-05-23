import { createContext, useContext, useReducer } from "react";
import reducer from '../reducer/search_reducer'
import axios from "axios";

const SearchContext = createContext()

const initialState = {
    isLoading: false,
}


export const SearchContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <SearchContext.Provider value={{ ...state, }}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearchContext = () => {
 return useContext(SearchContext)
}