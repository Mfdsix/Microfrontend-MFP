import React from 'react'
import { mount } from 'dashboard/DashboardApp'
import Template from '../templates/Vue'

export default function DashboardApp({
    isSignIn
}) {
    return <Template mount={mount} isSignIn={isSignIn}/>
}