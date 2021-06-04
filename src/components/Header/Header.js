import { Link } from 'gatsby'
import React, { useEffect, useRef } from 'react'
// context
import { useGlobalStateContext, useGlobalDispatchContext } from '../../Context/globalContext'

// custom hook
import useElementPosition from '../../hooks/useElementPosition'

// styled components
import { Container, Flex } from '../../globalStyles'
import { HeaderNav, Logo, Menu } from './headerStyle'

const Header = ({onCursor, setToggleMenu, toggleMenu, hamburgerPosition, setHamburgerPosition}) => {

    const dispatch = useGlobalDispatchContext()
    const {currentTheme} = useGlobalStateContext()
    const hamburger = useRef(null)
    const position = useElementPosition(hamburger)

    const toggleTheme = () => {
        if(currentTheme === "dark"){
            dispatch({
                type: "TOGGLE_THEME",
                theme: "light",
            }) 
        } else {
            dispatch({
                type: "TOGGLE_THEME",
                theme: "dark",       
            })
        }
    }

    const menuHover = () => {
        onCursor('locked')
        setHamburgerPosition({x: position.x, y: position.y + 72})
    }


    // we connect theme our localstorage
    // our purpose to use useEffect. If we refres the page, page will be same
    // useEffect kullanmamızın amacı sayfayı refresh etsek bile theme rengi en son ayarladığımız gibi kalacak 
    useEffect(() => {
        window.localStorage.setItem("theme", currentTheme)
    }, [currentTheme])

    return (
        <HeaderNav 
        animate={{y: 0, opacity: 1}}
        initial= {{y: -72, opacity: 0}}
        transition= {{duration: 1, ease: [0.6, 0.05, -0.01, 0.9]}}>
            <Container>
                {console.log(currentTheme)}
                <Flex spaceBetween noHeight>
                    <Logo
                        onMouseEnter={() => onCursor("hovered")}
                        onMouseLeave={onCursor}>
                        <Link to="/">UGR</Link>
                        <span 
                            onClick={toggleTheme}
                            onMouseEnter={() => onCursor("pointer")}
                            onMouseLeave={onCursor}>
                        </span>
                        <Link to="/">TRK</Link>
                    </Logo>
                    <Menu ref={hamburger} onClick={() => setToggleMenu(!toggleMenu)} onMouseEnter={menuHover} onMouseLeave={onCursor}>
                        <button>
                            <span></span>
                            <span></span>
                        </button>
                    </Menu>
                </Flex>
            </Container>
        </HeaderNav>
    )
}

export default Header
