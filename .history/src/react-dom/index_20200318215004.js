function render(element, container, callback) {
    if(typeof element === 'string' || typeof element === 'number') {
        return container.appendChild(document.createTextNode(element))
    }

    let {type, props} = element
    if(type.isReactComponent) {// 类
        const instance = new type(props)
        const elementFromClass = instance.render()
        type = elementFromClass.type
        props = elementFromClass.props
    }else if(typeof type === 'function') {// function
        const elementFromFun = type(props)
        type = elementFromFun.type
        props = elementFromFun.props
    }

    const doc = document.createElement(type)
    for(let propName in props) {
        const prop = props[propName]
        if(propName === 'className') {
            doc.className = prop
        }else if(propName === 'style') {
            const styleObj = prop
            for(let attr in styleObj) {
                doc.style[attr] = styleObj[attr]
            }
        }else if(/^on[A-Z]{1}/.test(propName)) {
            doc[propName.toLowerCase()] = prop
        }else if(propName === 'children') {
            const elementChildren = Array.isArray(prop) ? prop : [prop]
            elementChildren.forEach(ele => render(ele, doc))
        }
    }

    container.appendChild(doc)
}

export default {
    render
}