

const singleGame_reducer = (state, action) => {

    // loading
    if (action.type === 'IS_LOADING') {
        return {...state, isLoading: true}
    }

    if (action.type === 'IS_LOADING_SUCCESS') {
        return {...state, isLoading: false}
    }

    // fetch details
    if (action.type === 'FETCH_GAME_DETAILS') {
        const { data } = action.payload
        return {...state, game: data}
    }

    return {...state}
}

export default singleGame_reducer