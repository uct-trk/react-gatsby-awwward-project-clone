import React, { useEffect, useState } from 'react'
import { Cursor } from '../globalStyles';

// Context
import { useGlobalStateContext } from '../Context/globalContext';



const CustomCursor = () => {

    // destructuring ediyoruz
    const { cursorType } = useGlobalStateContext()

    const [mousePosition, setMousePosition] = useState({
        x: 400,
        y: 400,
    })

    const onMouseMove = (event) => {
        // destructuring
        const { pageX: x, pageY: y } = event;
        setMousePosition({ x, y })
    }

    useEffect(() => {
        document.addEventListener("mousemove", onMouseMove)
        return () => {
            document.removeEventListener("mousemove", onMouseMove)
        }
    }, [])

    return (
        <>
            <Cursor className={`${!!cursorType ? "hovered" : ""} ${cursorType}`} style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }} />
        </>
    )
}

export default CustomCursor
