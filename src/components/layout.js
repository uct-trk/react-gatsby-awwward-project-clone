/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import {normalize} from 'styled-normalize'

// components
import Header from "./Header/Header"

// context
import { useGlobalStateContext } from '../Context/globalContext'

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    *{
        text-decoration: none;
    }
    html{
        box-sizing: border-box;
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
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
  const darkTheme = {
    background: "#000",
    text: "#fff",
    red: "#ea291e",
  }

  const {currentTheme} = useGlobalStateContext()

  const lightTheme = {
    background: "#fff",
    text: "#000",
    red: "#ea291e",
  }

  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
    <GlobalStyle/>

    <Header/>
      <main>{children}</main>
   </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
