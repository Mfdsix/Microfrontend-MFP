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
    history, onSignIn
}) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                    <Route exact path="/auth/register">
                        <SignUp onSignIn={onSignIn}/>
                    </Route>
                    <Route exact path="/auth/login">
                        <SignIn onSignIn={onSignIn}/>
                    </Route>
                </Switch>
            </Router>
        </StylesProvider>
    </div>
}