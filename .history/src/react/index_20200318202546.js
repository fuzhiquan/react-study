function Element(type, config, children) {
    const props = {
        children
    }
    return {
        type,
        props
    }
}

function createElement(type, config, children) {
   return  Element(...arguments)
}

export default {
    createElement
}