import axios from "axios"

const baseUrl = "https://neteasecloudapi.herokuapp.com"

// 获取新歌动作
export const loadMusic = () => async (dispatch) => {
    try {
        const newSongs = await axios.get("${baseUrl}/top/song?type=96")
        dispatch({
            type: "FETCH_SONGS",
            payload: {
                newSongs: newSongs.data.data
            }
        })
    } catch (err) {
        console.log(err)
    }
}

// 获取歌曲具体信息动作
export const loadDetail = (id) => async (dispatch) => {
    try {
        const url = await axios.get(`${baseUrl}/song/url?id=${id}`)
        const info = await axios.get(`${baseUrl}/song/detail?ids=${id}`)
        const isAvailable = await axios.get(`${baseUrl}/check/music?id=${id}`)
        dispatch({
            type: "FETCH_DETAIL",
            payload: {
                url: url.data.data,
                info: info.data.songs,
                isAvailable: isAvailable.data,
            }
        })
    } catch (err) {
        console.log(err)
    }
}

// 搜索音乐或歌手的动作
export const searchMusic = (keyword) => async (dispatch) => {
    // const search = await axios.get(`${baseUrl}/search?keywords=${keyword}`)
    try {
        const search = await axios.get(`${baseUrl}/cloudsearch?keywords=${keyword}`)
        dispatch({
            type:"SEARCH",
            payload: {
                search: search.data.result.songs
            }
        })
    } catch (err) {
        console.log(err)
    }
}

// 用语音搜索音乐或歌手的动作
export const voiceSearchMusic = (res) => async (dispatch) => {
    try {
        dispatch({
            type:"VOICE_SEARCH",
            payload: {
                voiceSearch: res
            }
        })
    } catch (err) {
        console.log(err)
    }
}
