function Element(type, config, children) {
    const props = {}
    return {
        type,
        props,
        children
    }
}

export function createElement(type, config, children) {
   return  Element(arguments)
}