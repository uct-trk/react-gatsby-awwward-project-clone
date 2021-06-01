/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { normalize } from 'styled-normalize'

// components
import Header from "./Header/Header"
import CustomCursor from "./customCursor"
import Navigation from './Navigation/Navigation'

// context
import { useGlobalStateContext, useGlobalDispatchContext } from '../Context/globalContext'


export const GlobalStyle = createGlobalStyle`
    ${normalize}
    *{
        text-decoration: none;
        cursor: none;
    }
    html{
      box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
    }
    body{
        background: ${props => props.theme.background};
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        overscroll-behavior: none;
  overflow-x: hidden;
    }
`


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // theme temaların arkapalan rengi ve yazı rengi
  const darkTheme = {
    background: "#000",
    text: "#fff",
    red: "#ea291e",
  }

  const lightTheme = {
    background: "#fff",
    text: "#000",
    red: "#ea291e",
  }

  // destruturinf ediyoruz verilerimizi
  const { currentTheme, cursorStyles } = useGlobalStateContext()

  const dispatch = useGlobalDispatchContext()

  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({
      type: "CURSOR_TYPE",
      cursorType: cursorType
    })
  }

  const [toggleMenu, setToggleMenu] = React.useState(false)
  

  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <CustomCursor toggleMenu={toggleMenu}/>
      <Header onCursor={onCursor} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>
      <Navigation toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} onCursor={onCursor} />
      <main>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
