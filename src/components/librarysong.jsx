import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadDetail } from "../actions/musicAction"

// 侧边导航栏中的歌曲
function LibrarySong({ audio, isPlaying, setIsPlaying }) {
    const data = useSelector(state => state.musics.newSongs)
    const dispatch = useDispatch()
    function handleClick(cur) {
        console.log("clicking...")
        const song = data.filter(s => s.id === cur.id)
        if (song[0] !== undefined) {
            dispatch(loadDetail(song[0].id))
            console.log(song)
        }
        setIsPlaying(false)
        if (isPlaying) {
            const playPromise = audio.current.play()
            if (playPromise !== undefined)
                playPromise.then(() => {
                    audio.current.play()
                })
        }
    }
    return data.map(i => (
        <div
            key={i.id}
            onClick={() => handleClick(i)}
            className={`librarysong ${i.active ? "isactive" : ""}`}
        >
            <img src={i.album.picUrl} alt="cover" />
            <div className="info">
                {/* <p className="name">{i.name}</p> */}
                <p className="artist">{i.artists[0].name}</p>
            </div>
        </div>
    ))
}

export default LibrarySong
