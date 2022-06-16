import { h } from 'preact'
import { useState } from 'preact/hooks'
import { JSXInternal } from 'preact/src/jsx'
import { ObjectMap } from '../types/data'
import NotFound from './NotFound'

console.log(useState(0))

// const [route, setRoute] = useState(0)

function App(routes: ObjectMap<() => JSXInternal.Element>) {
    return <NotFound/>
    // return (
    //     routes.hasOwnProperty(route)
    //     ? routes[route]()
    //     : <NotFound/>
    // )
}

export {
    App,
    // setRoute,
}