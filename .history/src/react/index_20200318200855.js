function Element(type, props, children) {
    return {
        type,
        props,
        children
    }
}

export function createElement(type, props, children) {
   return  Element(arguments)
}