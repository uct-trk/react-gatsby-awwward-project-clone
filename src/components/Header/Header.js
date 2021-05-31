import { Link } from 'gatsby'
import React, { useEffect } from 'react'
// context
import { useGlobalStateContext, useGlobalDispatchContext } from '../../Context/globalContext'

// styled components
import { Container, Flex } from '../../globalStyles'
import { HeaderNav, Logo, Menu } from './headerStyle'

const Header = () => {

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
        <HeaderNav>
            <Container>
                {console.log(currentTheme)}
                <Flex spaceBetween noHeight>
                    <Logo>
                        <Link to="/">UGR</Link>
                        <span onClick={toggleTheme}></span>
                        <Link to="/">TRK</Link>
                    </Logo>
                    <Menu>
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
