import React from 'react'
import './LeftSideBar.css'
import { NavLink } from 'react-router-dom'
import Globe from "../../assets/globe.png"

const LeftSideBar = () => {
    return (
        <div className="left-sidebar">
                <nav className="side-nav">
                    <NavLink exact to="/" className="side-nav-links " activeClassName='active'>
                        <p>Home</p>
                    </NavLink>
                    <div className="side-nav-div">
                        <div>
                            <p>PUBLIC</p>
                        </div>
                        <NavLink exact to="/Questions" className="side-nav-links" activeClassName='active'>
                            <img style={{ height:'20px', width:'20px'}} src={Globe} alt="globe" />
                            <p style={{paddingLeft:'10px'}}>Questions</p>
                        </NavLink>
                        <NavLink exact to="/Tags" className="side-nav-links" activeClassName='active' style={{paddingLeft: "40px"}}>
                            <p>Tags</p> 
                        </NavLink>
                        <NavLink exact to="/Users" className="side-nav-links" activeClassName='active' style={{paddingLeft: "40px"}}>
                            <p>Users</p>
                        </NavLink>
                    </div>
                </nav>
        </div>
    )
}

export default LeftSideBar
