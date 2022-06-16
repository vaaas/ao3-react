import { render } from 'preact'
import './test.css'
import { empty_element } from './lib'
import routes from './routes'
import { App, /*setRoute*/ } from './components/App'

function main(): void {
    empty_element(document.body)
    // window.setRoute = setRoute
    render(App(routes), document.body)
}

main()