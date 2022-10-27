import React, {
    lazy, Suspense, useState, useEffect
} from "react"

import {
    Router, Route, Switch, Redirect
} from 'react-router-dom'
import {
    StylesProvider,
    createGenerateClassName
} from '@material-ui/core/styles'
import {
    createBrowserHistory
} from 'history'

import Loading from "./components/Loading"

const LazyMarketing = lazy(() => import('./components/MarketingApp'))
const LazyAuth = lazy(() => import('./components/AuthApp'))
const LazyDashboard = lazy(() => import('./components/DashboardApp'))

const generateClassName = createGenerateClassName({
    productionPrefix: 'ctnr-1'
})

const history = createBrowserHistory()


export default () => {
    
    const [isSignIn, setIsSignIn] = useState(false)
    
    const onSignIn = () => {
        setIsSignIn(true)
        history.push('/dashboard')
    }
    
    const onSignOut = () => {
        setIsSignIn(false);
        history.push("/auth/login")
    }

    return <StylesProvider generateClassName={generateClassName}>
    <Router history={history}>
    <Suspense fallback={<Loading/>}>
        <Switch>
            <Route path="/auth">
                {isSignIn && <Redirect to="/dashboard"/>}
                <LazyAuth onSignIn={onSignIn} isSignIn={isSignIn} onSignOut={onSignOut}/>
            </Route>
            <Route path="/dashboard">
                {!isSignIn && <Redirect to="/auth/login"/>}
                <LazyDashboard isSignIn={isSignIn} onSignOut={onSignOut}/>
            </Route>
            <Route path="/">
                <LazyMarketing isSignIn={isSignIn} onSignOut={onSignOut}/>
            </Route>
        </Switch>
    </Suspense>
    </Router>
    </StylesProvider>
}