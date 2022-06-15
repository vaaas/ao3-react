import { render } from 'preact'
import './test.css'
import { empty_element } from './lib'
import App from './components/App'

function main(): void {
    empty_element(document.body)
    render(App(), document.body)
}

main()