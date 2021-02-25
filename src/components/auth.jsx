import React, { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import { auth } from "../actions/authAction"
import { useHistory } from "react-router-dom"

// 登录组件
function Auth() {
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const { res } = useSelector(state => state.auth)
    const history = useHistory();
    function handlePhone(e) {
        setPhone(e.target.value)
    }
    function handlePassword(e) {
        setPassword(e.target.value)
    }
    function handleSubmit(e) {
        console.log("submit")
        e.preventDefault()
        dispatch(auth(phone, password))
        setPhone("")
        setPassword("")
        if (res == 200) 
            // <Redirect to="/" />
            history.push("/")
        else 
            alert("wrong phone number or password!")
    }
    return (
        <StyledBar>
            <h2>Login</h2>
            <input value={phone} onChange={handlePhone} type="text" placeholder="phone" />
            <input
                value={password}
                onChange={handlePassword}
                type="password"
                placeholder="password"
            />
            <button onClick={handleSubmit} type="submit">
                Submit
            </button>
        </StyledBar>
    )
}

// 对该组件进行渲染
const StyledBar = styled(motion.nav)`
    padding-top: 2rem;
    /* padding: 1rem 0rem; */
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
        margin-bottom: 1.5rem;
        font-family: "Major Mono Display", monospace;
    }
    input {
        width: 28%;
        font-size: 1.5rem;
        padding: 0.3rem 1rem;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
        border: none;
        margin-bottom: 1rem;
    }
    button {
        font-size: 1.5rem;
        border: none;
        padding: 0.37rem 2rem;
        margin-top: 0.8rem;
    }
`

export default Auth
