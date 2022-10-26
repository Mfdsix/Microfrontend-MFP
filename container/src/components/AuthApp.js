import React from 'react'
import { mount } from 'auth/AuthApp'
import Template from './Template'

export default function AuthApp({
    onSignIn,
    isSignIn
}) {
    return <Template mount={mount} onSignIn={onSignIn} isSignIn={isSignIn}/>
}