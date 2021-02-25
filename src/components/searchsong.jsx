import React, { useEffect } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import { loadDetail } from "../actions/musicAction"
import { Link } from "react-router-dom"

// 搜索出来的音乐组件
function SearchSong({ id, pic, artist, name }) {
    const dispatch = useDispatch()
    function handleLoadDetail() {
        // dispatch(loadDetail(id))
        loadDetail(id)(dispatch)
    }
    // useEffect(() => {
    //     handleLoadDetail(id)
    // }, [dispatch])
    // const { info } = useSelector(state => state.detail)
    // const img = info && info[0].al ? info[0].al.picUrl : null
    return (
        <Music>
            <h3>{name}</h3>
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
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
    }
    text-align: center;
    font-family: sans-serif;
`

export default SearchSong
