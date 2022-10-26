import React from 'react'
import { mount } from 'auth/AuthApp'
import Template from './Template'

export default function AuthApp() {
    return <Template mount={mount} onSignIn={ () => {
        console.log("sign in")
    }}/>
}