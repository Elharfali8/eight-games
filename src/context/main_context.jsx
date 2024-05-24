import { createContext, useContext, useReducer } from "react";
import reducer from '../reducer/main_reducer'
import axios from "axios";

const MainContext = createContext()


const initialState = {
    isLoading: false,
    popular_games: [],
    creators: []
}


export const MainContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const apiKey = import.meta.env.VITE_API_KEY

    const fetchPopularGames = async (pageSize) => {
        dispatch({type: 'IS_LOADING'})
        try {
            const response = await axios(`https://api.rawg.io/api/games?key=${apiKey}&ordering=-rating&page_size=${pageSize}`)
            const data = response.data.results
            dispatch({type: 'IS_LOADING_SUCCESS'})
            dispatch({ type: 'FETCH_POPULAR_GAMES', payload: {data} })
        } catch (error) {
             dispatch({type: 'IS_LOADING_SUCCESS'})
            console.log(error);
        }
    }

    const fetchCreators = async () => {
        dispatch({type: 'IS_LOADING'})
        try {
            const response = await axios('https://api.rawg.io/api/creators', {
                params: {
                    key: apiKey
                }
            })
            const data = response.data.results
            dispatch({ type: 'IS_LOADING_SUCCESS' })
            dispatch({type: 'FETCH_CREATORS', payload: {data}})
        } catch (error) {
            dispatch({type: 'IS_LOADING_SUCCESS'})
            console.log(error);
        }
    }
    
    return (
        <MainContext.Provider value={{...state, fetchPopularGames, fetchCreators}}>
            {children}
        </MainContext.Provider>
    )
}

export const useMainContext = () => {
    return useContext(MainContext)
}