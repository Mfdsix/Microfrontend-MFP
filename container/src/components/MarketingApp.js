import React from 'react'
import { mount } from 'marketing/MarketingApp'
import Template from '../templates/React'

export default function MarketingApp({
    isSignedIn,
    onSignOut
}) {
    return <Template mount={mount} isSignedIn={isSignedIn} onSignOut={onSignOut}/>
}