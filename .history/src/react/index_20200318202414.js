function Element(type, config, children) {
    const props = {}
    return {
        type,
        null,
        children
    }
}

function createElement(type, config, children) {
   return  Element(...arguments)
}

export default {
    createElement
}