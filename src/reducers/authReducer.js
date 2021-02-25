// 用于存储登录状态
const authReducer = (state = {}, action) => {
    switch (action.type) {
        case "AUTH":
            return {...state, res: action.payload.res}
        default:
            return {...state}
    }
}

export default authReducer