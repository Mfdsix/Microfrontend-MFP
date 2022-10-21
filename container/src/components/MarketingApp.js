import { mount } from 'marketing/MarketingApp'
import React, {
    useRef, useEffect
} from 'react'

export default () => {
    const ref = useRef(null)

    useEffect(() => {
        mount(ref.current, {
            onNavigate: () => {
                console.log("Hey i notice you change the path")
            }
        })
    })

    return <div ref={ref}/>
}