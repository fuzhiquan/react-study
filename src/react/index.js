const REACT_ELEMENT_TYPE = Symbol.for('react.element')

function ReactElement(type, config, children) {
    const props = {}
    for(let propName in config) {
        if(hasOwnProperty.call(config, propName)) {
            props[propName] = config[propName]
        }
    }

    const childrenLen = arguments.length - 2
    if(childrenLen === 1) {
        props['children'] = children
    }else if(childrenLen > 1) {
        const childArr = Array(childrenLen)
        for(let i=0; i<childArr.length; i++) {
            childArr[i] = arguments[2+i]
        }
        props['children'] = childArr
    }

    const element = {
        $$typeof: REACT_ELEMENT_TYPE,
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
    return ReactElement(...arguments)
}

function Component(){}
Component.prototype.isReactComponent = true

export default {
    createElement,
    Component
}