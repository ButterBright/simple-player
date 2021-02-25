import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { loadMusic, voiceSearchMusic } from "./actions/musicAction"
import Home from "./pages/home"
import "./styles/app.scss"
import alanBtn from "@alan-ai/alan-sdk-web"

const alanKey = "94ac156c78e12b2d6749b00271dd35812e956eca572e1d8b807a3e2338fdd0dc/stage"

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audio = useRef(null)
  const dispatch = useDispatch()
  const search = useSelector(state => state.musics.search)
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({command, songs, number}) => {
        if (command == "search") {
          dispatch(voiceSearchMusic(songs))
        } else if (command == "play") {
          setIsPlaying(true)
          audio.current.play()
        } else if (command == "pause") {
          setIsPlaying(false)
          audio.current.pause()
        } else if (command == "open") {
          const id = search && search[number-1].id
          // window.location = `/:${id}`
          window.open(`/${id}`)
          // <Redirect from='/' to='/:id' />
        }
      }
    })
  }, [])
  return (
    <div>
      <Home isPlaying={isPlaying} setIsPlaying={setIsPlaying} audio={audio}/>
    </div>
  );
}

export default App;
