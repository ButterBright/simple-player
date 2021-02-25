import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { useDispatch } from "react-redux"
import { loadDetail } from "../actions/musicAction"
import { Link } from "react-router-dom"

// 获取的新歌组件
function Song({ id, pic, artist }) {
    const dispatch = useDispatch()
    function handleLoadDetail() {
        dispatch(loadDetail(id))
    }

    return (
        <Music>
            <h3>{artist}</h3>
            <Link to={`/${id}`}>
                <img onClick={handleLoadDetail} src={pic} alt="cover" />
            </Link>
        </Music>
    )
}

const Music = styled(motion.div)`
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);
    border-radius: 1rem;
    img {
        width: 100%;
        min-height: 45vh;
        object-fit: cover;
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
    }
    text-align: center;
    font-family: sans-serif;
`

export default Song
