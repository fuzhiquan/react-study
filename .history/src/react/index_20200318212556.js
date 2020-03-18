function ReactElement(type, config, children) {
    const props = {}
    for(let propName in config) {// in可以获取到继承的属性
        if(hasOwnProperty.call(config, propName)) {// hasOwnProperty获取的是对象自身的属性
            props[propName] = config[propName]
        }
    }

    const childrenLen = arguments.length - 2
    if(childrenLen === 1) {
        props.children = children
    }else if(childrenLen > 1) {
        const childrenArr = Array(childrenLen)
        for(let i=0; i<childrenArr.length; i++) {
            childrenArr[i] = arguments[2 + i]
        }

        props.children = childrenArr
    }

    const element = {
        $$typeof: Symbol.for('react.element'),
        key: null,// 加上key, ref方便和原生混用，否则报错
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

class Component {
    isReactComponent = true
}

export default {
    createElement,
    Component
}