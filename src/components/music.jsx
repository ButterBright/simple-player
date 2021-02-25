import { useSelector } from "react-redux"
import Player from "./player"
import Nav from "./nav"
import Library from "./library"

// 播放器界面
function Music({isPlaying, setIsPlaying, audio}) {
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(loadDetail(id))
    // }, [dispatch])
    const { url, info, isAvailable } = useSelector(state => state.detail)
    const mp3 = url ? url[0].url : null
    const name = info ? info[0].name : null
    const pic = info && info[0].al ? info[0].al.picUrl : null
    const artist = info && info[0].ar ? info[0].ar[0].name : null
    const music = {
        audio: mp3,
        name: name,
    }
    const isToggle = useSelector(state => state.toggle)
    return (
        <div>
            <div className={`${isToggle ? "" : "thin"}`}>
                <Nav />
                <div className="song">
                    <img src={pic} alt="cover" className={`${isPlaying ? "rotate" : ""}`}/>
                    <p className="name">{name}</p>
                    <p className="artist">{artist}</p>
                </div>
                <div>
                    <Player audio={audio} info={music} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
                </div>
            </div>
            <Library audio={audio} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>

        </div>
    )
}

export default Music
