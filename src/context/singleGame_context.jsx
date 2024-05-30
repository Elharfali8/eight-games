import { createContext, useContext, useReducer } from "react";
import reducer from '../reducer/singleGame_reducer'
import axios from "axios";


const SingleGameContext = createContext()


const initialState = {
    isLoading: false,
    game: []
}

export const SingleGameProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const apiKey = import.meta.env.VITE_API_KEY

    const fetchGameDetails = async (id) => {
        dispatch({ type: 'IS_LOADING' });
        try {
          const response = await axios.get(`https://api.rawg.io/api/games/${id}`, {
            params: {
              key: apiKey
            },
          });
          dispatch({ type: 'IS_LOADING_SUCCESS' });
          const data = response.data;
          dispatch({ type: 'FETCH_GAME_DETAILS', payload: {data} });
        } catch (error) {
          dispatch({ type: 'IS_LOADING_SUCCESS' });
          console.error(error);
        }
    };
  
  const fetchTrailer = async (id) => {
    try {
      const response = await axios.get(`https://api.rawg.io/api/games/${id}/movies`, {
        params: {
          key: apiKey,
        }
      })
      const data = response
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
    
    return (
        <SingleGameContext.Provider value={{...state, fetchGameDetails, fetchTrailer}}>
            {children}
        </SingleGameContext.Provider>
    )
}


export const useSingleGameContext = () => {
    return useContext(SingleGameContext)
}