import React from "react"
import LibrarySong from "./librarysong"
import { useSelector } from "react-redux"

// 侧边导航栏组件
function Library({audio, isPlaying, setIsPlaying}) {
    // const data = useSelector(state => state.games.newSongs)
    const isToggle = useSelector(state => state.toggle)
    return (
        <div className={`library ${isToggle ? "istoggle" : ""}`}>
            <h3 className="title">Library</h3>
            <div>
                <LibrarySong audio={audio} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
            </div>
        </div>
    )
}

export default Library
