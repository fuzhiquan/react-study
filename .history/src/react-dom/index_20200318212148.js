function render(element, container, callback) {
    const {type} = element
    if(typeof type === 'string' || typeof type === 'number') {
        container.appendChild(document.createTextNode(type))
    }
}

export default {
    render
}