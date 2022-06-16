export type ObjectMap<A> = {
    [key: string]: A
}

export type ValueOf<A> = A[keyof A]