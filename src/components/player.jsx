import React, {useRef, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faCaretLeft, faCaretRight, faPause } from '@fortawesome/free-solid-svg-icons'

// 播放器进度条、播放键以及前进和后退键
function Player({audio, info, isPlaying, setIsPlaying}) {
    const [time, setTime] = useState({
        cur: 0,
        tot: 0
    })
    const slider = useRef(null)
    function handlePlay() {
        if (isPlaying)
            audio.current.pause()
        else
            audio.current.play()
        setIsPlaying(!isPlaying)
    }
    function handleTime(e) {
        let cur = e.target.currentTime
        const tot = e.target.duration
        setTime({cur: cur, tot: tot})
    }
    function formatTime(time) {
        return Math.floor(time/60)+":"+ ("0"+Math.floor(time%60)).slice(-2)
    }
    function handleDrag(e) {
        setTime({...time, cur: e.target.value})
        audio.current.currentTime = e.target.value
    }
    function goForward(e) {
        audio.current.currentTime += 10
        // slider.current.defaultValue += 10
        // setTime({...time, cur: time.cur+10})
    }
    function goBackward(e) {
        audio.current.currentTime -= 10
        // setTime({...time, cur: time.cur-10})
    }
    return (
        <div className="player">
            <div className="timecontrol">
                <p>{formatTime(time.cur)}</p>
                <input ref={slider} onChange={handleDrag} min="0" max={time.tot || 0} value={time.cur || 0} type="range"/>
                <p>{time.tot ? formatTime(time.tot) : "0:00"}</p>
            </div>
            <div className="playcontrol">
                <FontAwesomeIcon onClick={goBackward} icon={faCaretLeft} size="2x"/>
                <FontAwesomeIcon onClick={handlePlay} icon={isPlaying ? faPause : faPlay} size="2x"/>
                <FontAwesomeIcon onClick={goForward} icon={faCaretRight} size="2x"/>
            </div>
            <audio onTimeUpdate={handleTime} onLoadedMetadata={handleTime} src={info.audio} ref={audio}></audio>
        </div>
    )
}   

export default Player
