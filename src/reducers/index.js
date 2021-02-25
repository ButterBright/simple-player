import { combineReducers } from "redux"
import musicReducer from "./musicReducer"
import detailReducer from "./detailReducer"
import toggleReducer from "./toggleReducer"
import authReducer from "./authReducer"

const rootReducer = combineReducers({
    musics: musicReducer,
    detail: detailReducer,
    toggle: toggleReducer,
    auth:authReducer 
})

export default rootReducer
