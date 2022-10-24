import React, {
    useRef, useEffect
} from 'react'
import {
    useHistory
} from 'react-router-dom'
import Header from './Header'

export default ({
    mount
}) => {
    const ref = useRef(null)
    const history = useHistory()

    useEffect(() => {
        const { navigateTo } = mount(ref.current, {
            initialPath: history?.location?.pathname,
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

    return <div>
        <Header/>
        <div ref={ref}/>
        </div>
}