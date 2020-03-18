function render(element, container, callback) {
    if(typeof element === 'string' || typeof element === 'number') {
        container.appendChild(document.createTextNode(element))
    }

    let {type, props} = element
    if(type.isReactComponent) {
        const instance = new type(props)
        const elementFromClass = instance.render()
        type = elementFromClass.type
        props = elementFromClass.props
    }

    
}

export default {
    render
}