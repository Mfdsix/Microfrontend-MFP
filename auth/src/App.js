import React from "react"
import {
    Switch, Route, Router
} from 'react-router-dom'
import {
    StylesProvider, createGenerateClassName
} from '@material-ui/core/styles'

import SignUp from './components/Signup'
import SignIn from './components/Signin'

const generateClassName = createGenerateClassName({
    productionPrefix: 'auth-'
});

export default ({
    history
}) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                    <Route exact path="/auth/register" component={SignUp}/>
                    <Route exact path="/auth/login" component={SignIn}/>
                </Switch>
            </Router>
        </StylesProvider>
    </div>
}