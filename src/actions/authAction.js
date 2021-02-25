import axios from "axios"

// 登录动作
export const auth = (phone, password) => async (dispatch) => {
    try {
        const res = await axios.get(`http://localhost:3000/login/cellphone?phone=${phone}&password=${password}`)
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
