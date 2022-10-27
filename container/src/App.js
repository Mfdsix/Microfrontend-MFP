import React, {
    lazy, Suspense, useState
} from "react"

import {
    BrowserRouter, Route, Switch
} from 'react-router-dom'
import {
    StylesProvider,
    createGenerateClassName
} from '@material-ui/core/styles'

import Loading from "./components/Loading"

const LazyMarketing = lazy(() => import('./components/MarketingApp'))
const LazyAuth = lazy(() => import('./components/AuthApp'))

const generateClassName = createGenerateClassName({
    productionPrefix: 'ctnr-1'
})


export default () => {
    
    const [isSignIn, setIsSignIn] = useState(false)
    
    const onSignIn = () => {
        setIsSignIn(true)
    }
    
    const onSignOut = () => {
        setIsSignIn(false);
    }

    return <StylesProvider generateClassName={generateClassName}>
    <BrowserRouter>
    <Suspense fallback={<Loading/>}>
        <Switch>
            <Route path="/auth">
                <LazyAuth onSignIn={onSignIn} isSignIn={isSignIn}
                onSignOut={onSignOut}/>
            </Route>
            <Route path="/">
                <LazyMarketing isSignIn={isSignIn}
                onSignOut={onSignOut}/>
            </Route>
        </Switch>
    </Suspense>
    </BrowserRouter>
    </StylesProvider>
}