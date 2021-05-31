import React from 'react'
import { GlobalProvider } from './src/Context/globalContext'

export const wrapRootElement = ({element}) => {
    return (
        <GlobalProvider>
            {element}
        </GlobalProvider>
    )
}
