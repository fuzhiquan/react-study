function Element(type, config, children) {
    this.$$typeof = Symbol('react.element')
    this.type = type
    this.props = {
        children
    }
}

function createElement(type, config, children) {
   return  new Element(...arguments)
}

export default {
    createElement
}