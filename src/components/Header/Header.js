import { Link } from 'gatsby'
import React, { useEffect } from 'react'
// context
import { useGlobalStateContext, useGlobalDispatchContext } from '../../Context/globalContext'

// styled components
import { Container, Flex } from '../../globalStyles'
import { HeaderNav, Logo, Menu } from './headerStyle'

const Header = ({onCursor, setToggleMenu, toggleMenu}) => {

    const dispatch = useGlobalDispatchContext()
    const {currentTheme} = useGlobalStateContext()

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

    // we connect theme our localstorage
    // our purpose to use useEffect. If we refres the page, page will be same
    // useEffect kullanmamızın amacı sayfayı refresh etsek bile theme rengi en son ayarladığımız gibi kalacak 
    useEffect(() => {
        window.localStorage.setItem("theme", currentTheme)
    }, [currentTheme])

    return (
        <HeaderNav 
        animate={{y: 0, opacity: 1}}
        initial= {{y: -82, opacity: 0}}
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
                    <Menu onClick={() => setToggleMenu(!toggleMenu)}>
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
