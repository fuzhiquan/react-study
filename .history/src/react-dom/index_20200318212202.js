function render(element, container, callback) {
    if(typeof element === 'string' || typeof element === 'number') {
        container.appendChild(document.createTextNode(type))
    }
}

export default {
    render
}