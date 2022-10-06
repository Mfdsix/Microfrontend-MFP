import React from 'react'
import ReactDOM from 'react-dom'

const mount = (el) => {
    ReactDOM.render(
        <h1>Hi from marketing</h1>,
        el
    )
}

if(process.env.NODE_ENV === 'development'){
    mount(document.querySelector("#dev-marketing"));
}

export {
    mount
}