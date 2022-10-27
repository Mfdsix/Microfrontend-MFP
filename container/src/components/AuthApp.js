import React from 'react'
import { mount } from 'auth/AuthApp'
import Template from './Template'

export default function AuthApp({
    onSignIn,
    isSignIn,
    onSignOut
}) {
    return <Template mount={mount} onSignIn={onSignIn} isSignIn={isSignIn} onSignOut={onSignOut}/>
}