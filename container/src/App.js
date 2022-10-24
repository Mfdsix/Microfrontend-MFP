import React, {
    lazy, Suspense
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
    return <StylesProvider generateClassName={generateClassName}>
    <BrowserRouter>
    <Suspense fallback={<Loading/>}>
        <Switch>
            <Route path="/auth" component={LazyAuth}/>
            <Route path="/" component={LazyMarketing}/>
        </Switch>
    </Suspense>
    </BrowserRouter>
    </StylesProvider>
}