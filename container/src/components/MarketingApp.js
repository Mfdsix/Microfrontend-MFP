import { mount } from 'marketing/MarketingApp'
import React, {
    useRef, useEffect
} from 'react'
import {
    useHistory
} from 'react-router-dom'

export default () => {
    const ref = useRef(null)
    const history = useHistory()

    useEffect(() => {
        const { navigateTo } = mount(ref.current, {
            onNavigate: (pathname) => {
                if(history.location?.pathname !== pathname)
                {
                    history.push(pathname)
                }
            }
        })

        history.listen(({ pathname }) => {
            navigateTo(pathname)
        })
    })

    return <div ref={ref}/>
}