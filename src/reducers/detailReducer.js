const initState = {}

// 用于存储歌曲具体信息
const detailReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_DETAIL":
            return {
                ...state,
                url: action.payload.url,
                info: action.payload.info,
                isAvailable: action.payload.isAvailable,
            }
        default:
            return { ...state }
    }
}

export default detailReducer
