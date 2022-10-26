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

    return <StylesProvider generateClassName={generateClassName}>
    <BrowserRouter>
    <Suspense fallback={<Loading/>}>
        <Switch>
            <Route path="/auth">
                <LazyAuth onSignIn={() => {
                    console.log("on sign in triiered")
                    setIsSignIn(true)
                }} isSignIn={isSignIn}/>
            </Route>
            <Route path="/">
                <LazyMarketing isSignIn={isSignIn}/>
            </Route>
        </Switch>
    </Suspense>
    </BrowserRouter>
    </StylesProvider>
}