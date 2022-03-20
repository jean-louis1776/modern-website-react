import React, { useState } from "react"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import logo from "../../assets/logo.svg"
import "./navbar.css"

const Menu = () => {
    return (
        <>
            <p>
                <a href="#home">Home</a>
            </p>
            <p>
                <a href="#wgpt3">What is GPT?</a>
            </p>
            <p>
                <a href="#features">Open AI</a>
            </p>
            <p>
                <a href="#possibility">Case Studies</a>
            </p>
            <p>
                <a href="#blog">Library</a>
            </p>
        </>
    )
}

const Sign = () => {
    return (
        <>
            <p>
                <a href="#home">Sign in</a>
            </p>
            <button type="button">Sign up</button>
        </>
    )
}

const Navbar = (props) => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="Logo" />
                </div>

                <div className="gpt3__navbar-links_container">
                    <Menu />
                </div>
            </div>

            <div className="gpt3__navbar-sign">
                <Sign />
            </div>

            <div className="gpt3__navbar-menu">
                {toggleMenu ? (
                    <RiCloseLine
                        color="#fff"
                        size={27}
                        onClick={() => setToggleMenu(false)}
                    />
                ) : (
                    <RiMenu3Line
                        color="#fff"
                        size={27}
                        onClick={() => setToggleMenu(true)}
                    />
                )}
                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                            <Menu />

                            <div className="gpt3__navbar-menu_container-links-sign">
                                <Sign />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
