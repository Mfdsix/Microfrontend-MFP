import React, {
    useRef, useEffect
} from 'react'
import {
    useHistory
} from 'react-router-dom'
import Header from './Header'

export default (props) => {
    const { mount, onSignOut, isSignIn = false, ...otherProps } = props
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
            },
            ...otherProps
        })

        history.listen(({ pathname }) => {
            navigateTo(pathname)
        })
    })

    return <div>
        <Header signedIn={isSignIn} onSignOut={onSignOut}/>
        <div ref={ref}/>
    </div>
}