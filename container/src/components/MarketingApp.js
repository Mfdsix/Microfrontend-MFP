import React from 'react'
import { mount } from 'marketing/MarketingApp'
import Template from '../templates/React'

export default function MarketingApp({
    isSignIn,
    onSignOut
}) {
    return <Template mount={mount} isSignIn={isSignIn} onSignOut={onSignOut}/>
}