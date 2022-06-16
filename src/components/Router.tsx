import { h, } from 'preact'
import { useContext } from 'preact/hooks'

export function Router({ component }: { component: () => h.JSX.Element }) {
    return component()
}

export const useRouter = () => useContext()