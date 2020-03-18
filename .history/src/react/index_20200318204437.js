function ReactElement(type, config, children) {
    const element = {
        $$typeof: Symbol.for('react.element'),
        type,
        key: '',
        props: {
            config,
            children
        }
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