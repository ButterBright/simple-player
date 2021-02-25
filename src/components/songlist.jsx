import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadDetail, loadMusic } from "../actions/musicAction"
import styled from "styled-components"
import { motion } from "framer-motion"
import Song from "../components/song"
import SearchBar from "../components/searchBar"
import SearchSong from "../components/searchsong"
import { useHistory } from "react-router-dom"

// 新歌列表组件
function SongList() {
    const { res } = useSelector(state => state.auth)
    const history = useHistory()
    const dispatch = useDispatch()
    useEffect(() => {
        // dispatch(loadMusic())
        loadMusic()(dispatch)
    }, [])
    const newSongs = useSelector(state => state.musics.newSongs)
    const search = useSelector(state => state.musics.search)
    function clearSearch() {
        dispatch({ type: "CLEAR" })
    }
    function redirect() {
        if (res != 200) 
            history.push("/")
    }
    return (
        <div onLoad={redirect}>
            <Title onClick={clearSearch}>Simple-Player</Title>
            <SearchBar />
            {search && search.length != 0 ? (
                <SubTitle>Search Result</SubTitle>
            ) : (
                ""
            )}
            <MusicList>
                {search &&
                    search.map(song => (
                        <SearchSong
                            id={song.id}
                            key={song.id}
                            pic={song.al.picUrl}
                            // pic={song.artists[0].img1v1Url}
                            artist={song.ar[0].name}
                            // artist={song.artists[0].name}
                            name={song.name}
                        />
                    ))}
            </MusicList>
            <SubTitle>New Song Express</SubTitle>
            <MusicList>
                {newSongs.map(song => (
                    <Song
                        id={song.id}
                        key={song.id}
                        pic={song.album.picUrl}
                        artist={song.artists[0].name}
                    />
                ))}
            </MusicList>
        </div>
    )
}

// 对组件进行渲染
const Title = styled(motion.div)`
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    font-family: "Major Mono Display", monospace;
`

const MusicList = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    padding: 3rem 5rem;
`

const SubTitle = styled(motion.div)`
    margin-top: 3rem;
    text-align: center;
    font-family: "Major Mono Display", monospace;
    font-size: 20px;
`

export default SongList
