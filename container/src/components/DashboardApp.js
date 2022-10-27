import React from 'react'
import { mount } from 'dashboard/DashboardApp'
import Template from '../templates/Vue'

export default function DashboardApp({
    isSignIn,
    onSignOut
}) {
    return <Template mount={mount} isSignIn={isSignIn} onSignOut={onSignOut}/>
}