function ReactElement(type, config, children) {
    const props = {}
    for(let propName in config) {
        if(hasOwnProperty.call(config, propName)) {
            props[propName] = config[propName]
        }
    }

    const childrenLen = arguments.length - 2
    

    const element = {
        $$typeof: Symbol.for('react.element'),
        key: null,
        ref: null,
        type,
        props
    }

    if(Object.freeze) {
        Object.freeze(element.props)
        Object.freeze(element)
    }
    return element
}

function createElement(type, config, children) {
   return  ReactElement(...arguments)
}

export default {
    createElement
}