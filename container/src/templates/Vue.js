import React, {
    useRef, useEffect
} from 'react'
import Header from '../components/Header';

export default ({
    isSignIn,
    onSignOut,
    mount
}) => {
    const ref = useRef();

    useEffect(() => {
        mount(ref.current)
    })

    return <div>
        <Header signedIn={isSignIn} onSignOut={onSignOut}/>
        <div ref={ref}/>
    </div>
}