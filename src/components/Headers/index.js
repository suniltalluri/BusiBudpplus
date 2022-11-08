import {Component} from "react"
import { CgClose,CgMenu } from 'react-icons/cg';
import {NavLink} from "react-router-dom"
import "./index.css"

class Headers extends Component{
    state={
        toggleMenu : false
    }

    onClickHBMenu = ()=>{
        this.setState(prevState=>({toggleMenu : !prevState.toggleMenu}))
        // console.log("clicked")
    }

    onClickCloseMenu = ()=>{
        this.setState(prevState=>({toggleMenu : !prevState.toggleMenu}))
        // console.log("clicked")
    }

    render(){
        const {toggleMenu} = this.state
        console.log(toggleMenu)
        return(
            <nav className="Headers_page">
                <h1 className="navHeading">Navbar</h1>
                <ul className="NavTabs_card">
                    <NavLink to="/nav1" className="navLink">
                        <li className="nav_tab">Nav1</li>
                    </NavLink>
                    <NavLink to="/nav2" className="navLink">
                        <li className="nav_tab">Nav2</li>
                    </NavLink>
                    <NavLink to="/nav3" className="navLink">
                        <li className="nav_tab">Nav3</li>
                    </NavLink>
                    <NavLink to="/nav4" className="navLink">
                        <li className="nav_tab">Nav4</li>
                    </NavLink>
                    <NavLink to="/nav5" className="navLink">
                        <li className="nav_tab">Nav5</li>
                    </NavLink>
                    <NavLink to="/nav6" className="navLink">
                        <li className="nav_tab">Nav6</li>
                    </NavLink>
                    <NavLink to="/nav7" className="navLink">
                        <li className="nav_tab">Nav7</li>
                    </NavLink>
                    <NavLink to="/nav8" className="navLink">
                        <li className="nav_tab">Nav8</li>
                    </NavLink>
                <div className="mobileNavBar">
                    {!toggleMenu && 
                    <CgMenu className="hamburgerMenu" onClick={this.onClickHBMenu}/>
                    }
                    {toggleMenu && 
                    <CgClose className="closeMenu" onClick={this.onClickCloseMenu}/>
                      }
                </div>
                </ul>
                {toggleMenu && 
                <div className="mobileNavLink">
                    <h1 className="Mnav ">Nav1</h1>
                    <h1 className="Mnav">Nav2</h1>
                    <h1 className="Mnav">Nav3</h1>
                    <h1 className="Mnav">Nav4</h1>
                    {/* <h1 className="Mnav">Nav5</h1>
                    <h1 className="Mnav">Nav6</h1>
                    <h1 className="Mnav">Nav7</h1>
                    <h1 className="Mnav">Nav8</h1> */}
                    </div>
                    }
            </nav>
        )
    }
}

export default Headers