import React, {useState} from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { useDispatch } from "react-redux"
import { searchMusic } from "../actions/musicAction"

// 搜索栏组件
function SearchBar() {
    const dispatch = useDispatch()
    const [text, setText] = useState("")
    function handleInput(e) {
        setText(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        dispatch(searchMusic(text))
        setText("")
    }
    return (
        <StyledBar>
            <input onChange={handleInput} value={text} type="text" />
            <button onClick={handleSubmit} type="submit">search</button>
        </StyledBar>
    )
}

// 对搜索栏进行渲染
const StyledBar = styled(motion.nav)`
    padding-top: 2rem;
    /* padding: 1rem 0rem; */
    text-align: center;
    input {
        width: 30%;
        font-size: 1.5rem;
        padding: 0.3rem 1rem;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
        border: none;
    }
    button {
        font-size: 1.5rem;
        border: none;
        padding: 0.37rem 2rem;
    }
`

export default SearchBar
