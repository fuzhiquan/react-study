function render(element, container, callback) {
    const {type} = element
    if(typeof type === 'string' || typeof type === 'number') {
        container.appendChild(document.createElement(type))
    }
}

export default {
    render
}