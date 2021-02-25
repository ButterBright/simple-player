import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMusic, faUserPlus } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { toggle } from "../actions/toggleAction"
import { useSelector, useDispatch } from "react-redux"

// 播放器界面上方导航栏
function Nav() {
    const dispatch = useDispatch()
    function handleToggle() {
        dispatch(toggle())
    }
    return (
        <div className={"nav"}>
            <h2 onClick={handleToggle}>Wave</h2>
            <Link to={"/"}>
                <div className="icon">
                    <FontAwesomeIcon icon={faMusic} />
                </div>
            </Link>
        </div>
    )
}

export default Nav
