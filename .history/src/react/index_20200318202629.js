function Element(type, config, children) {
    const props = {
        children: ['nihao']
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