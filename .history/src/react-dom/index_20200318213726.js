function render(element, container, callback) {
    if(typeof element === 'string' || typeof element === 'number') {
        return container.appendChild(document.createTextNode(element))
    }

    let {type, props} = element
    if(type.isReactComponent) {
        const instance = new type(props)
        const elementFromClass = instance.render()
        type = elementFromClass.type
        props = elementFromClass.props
    }else if(typeof type === 'function') {
        const elementFromFun = type(props)
        type = elementFromFun.type
        props = elementFromFun.props
    }

    const doc = document.createElement(type)

    container.appendChild(doc)
}

export default {
    render
}