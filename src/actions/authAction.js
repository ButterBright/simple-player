import axios from "axios"

const baseUrl = "https://neteasecloudapi.herokuapp.com"
// 登录动作
export const auth = (phone, password) => async (dispatch) => {
    try {
        const res = await axios.get(`${baseUrl}/login/cellphone?phone=${phone}&password=${password}`)
        dispatch({
            type: "AUTH",
            payload: {
                res: res.data.code
            }
        })
    } catch (err) {
        console.log(err)
    }
}

export default auth
