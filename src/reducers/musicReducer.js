const initState = {
    newSongs: []
}

// 用于存储获得的歌曲
const musicReducer = (state=initState, action) => {
    switch (action.type) {
        case "FETCH_SONGS":
            return {...state, newSongs: action.payload.newSongs }
        case "SEARCH":
            return {...state, search: action.payload.search}
        case "VOICE_SEARCH":
            return {...state, search: action.payload.voiceSearch}
        case "CLEAR":
            return {...state, search: []}
        default:
            return {...state}
    }
}

export default musicReducer