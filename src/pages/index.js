import React from "react"
import Layout from "../components/layout"

// components
import HomeBanner from "../components/HomePage/HomeBanner"
import HomeContent from "../components/HomeContent/HomeContent"
import HomeFeatured from "../components/HomeFeatured/HomeFeatured"
//Context
import { useGlobalDispatchContext, useGlobalStateContext } from "../Context/globalContext"


const IndexPage = props => {
  const dispatch = useGlobalDispatchContext()
  const { cursorStyles } = useGlobalStateContext()

  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({
      type: "CURSOR_TYPE",
      cursorType: cursorType
    })
  }

  return (

  <Layout>
    <HomeBanner onCursor={onCursor} />
    <HomeContent/>
    <HomeFeatured onCursor={onCursor} />
  </Layout>

  )
}

export default IndexPage