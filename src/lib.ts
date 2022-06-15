export function empty_element(x: Element): void {
    while (x.firstChild)
        x.firstChild.remove()
}
