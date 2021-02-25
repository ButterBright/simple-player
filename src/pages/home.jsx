import React from "react"
import SongList from "../components/songlist"
import Music from "../components/music"
import Auth from "../components/auth"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

// 家目录
function Home({isPlaying, setIsPlaying, audio}) {
    return (
        <Router>
            <Redirect from='/' to='/login' />
            <Switch>
                <Route path="/" exact component={SongList} />
                <Route path="/login" component={Auth} />
                {/* <Route path="/:id" component={Music} /> */}
                <Route path="/:id" render={() => <Music isPlaying={isPlaying} setIsPlaying={setIsPlaying} audio={audio}/>} />
            </Switch>
        </Router>
    )
}

export default Home
