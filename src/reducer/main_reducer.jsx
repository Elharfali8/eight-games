
const main_reducer = (state, action) => {

    // loading
    if (action.type === 'IS_LOADING') {
        return {...state, isLoading: true}
    }

    if (action.type === 'IS_LOADING_SUCCESS') {
        return {...state, isLoading: false}
    }

    // fetch popular
    if (action.type === 'FETCH_POPULAR_GAMES') {
        const { data } = action.payload
        return {...state, popular_games: data}
    }

    // fetch creators
    if (action.type === 'FETCH_CREATORS') {
        const { data } = action.payload
        return {...state, creators: data}
    }

    return {...state}
}

export default main_reducer