function ReactElement(type, config, children) {
    const element = {
        $$typeof: Symbol.for('react.element'),
        type,
        props: {
            config,
            children
        }
    }
}

function createElement(type, config, children) {
   return  ReactElement(...arguments)
}

export default {
    createElement
}