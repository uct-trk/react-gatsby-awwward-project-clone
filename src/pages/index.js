import React from "react"
import Layout from "../components/layout"

// components
import HomeBanner from "../components/HomePage/HomeBanner"
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
  </Layout>

  )
}

export default IndexPage