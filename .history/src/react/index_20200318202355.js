function Element(type, config, children) {
    const props = {}
    return {
        type,
        props,
        children
    }
}

function createElement(type, config, children) {
   return  Element(...arguments)
}

export default {
    createElement
}