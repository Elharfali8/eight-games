
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

    // fetch games and pages
    if (action.type === 'FETCH_PAGES') {
        const { pages } = action.payload
        return {...state, total_pages: Math.ceil(pages / 20)}
    }

    // fetch games
    if (action.type === 'FETCH_GAMES') {
        const { data } = action.payload
        return {...state, games: data}
    }

    // fetch platforms
    if (action.type === 'FETCH_PLATFORMS') {
        const { data } = action.payload
        return {...state, platforms: data}
    }

    // fetch genres
    if (action.type === 'FETCH_GENRES') {
        const { data } = action.payload
        return {...state, genres: data}
    }

    // fetch games by platforms
    if (action.type === 'FETCH_GAMES_BY_PLATFORMS') {
        const { data } = action.payload
        return {...state, platform_games: data}
    }

    return {...state}
}

export default main_reducer