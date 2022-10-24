import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {
    createMemoryHistory,
    createBrowserHistory
} from 'history'

const mount = (el, {
    onNavigate,
    initialPath = '/auth/signin'
} = {}) => {
    const history = onNavigate ? createMemoryHistory({
        initialEntries: [initialPath]
    }) : createBrowserHistory()

    if(onNavigate){
        history.listen(({
            pathname
        }) => onNavigate(pathname))
    }

    ReactDOM.render(<App history={history}/>, el)

    if(onNavigate){
        return {
            navigateTo: (pathname) => {
                if(history.location.pathname !== pathname){
                    history.push(pathname)
                }
            }
        }
    }
}

if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector("#dev-auth")
    
    if(el){
        mount(document.querySelector("#dev-auth"));
    }
}

export {
    mount
}