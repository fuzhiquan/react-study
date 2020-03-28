const ATTRS = 'ATTRS'
const TEXT = 'TEXT'
const REMOVE = 'REMOVE'
const REPLACE = 'REPLACE'
/**
 * diff规则
 * 1. 先比较两个节点类型是否相同，如果相同去看一下属性是否相同，不同就产生一个补丁包{type: 'ATTRS',attrs: {class: 'abc'}}
 * 2. 如果节点类型不同{type: 'REPLACE', newNode: newNode}
 * 3. 如果节点不存在{type: 'REMOVE', index: 0}
 * 4. 如果节点是文本节点，而且发生了变化{type: 'TEXT', text: XXX}
 * @param {*} oldTree 
 * @param {*} newTree 
 */
function diff(oldTree, newTree) {
    const patches = {}
    let index = 0
    // 递归树，从树的0开始，把比较后的结果放进patches
    walk(oldTree, newTree, index, patches)
    return patches
}
function isBaseType(any) {
    const type = Object.prototype.toString.call(any)
    return type === '[object String]' || type === '[object Number]'
}
function walk(oldTree, newTree, index, patches) {
    // 用来存放当前要比较的节点自己的补丁包
    const currentPatch = []
    if(!!!newTree) {
        currentPatch.push({type: REMOVE, index})
    }else if(isBaseType(oldTree) && isBaseType(newTree)) {
        oldTree !== newTree && currentPatch.push({type: TEXT, text: newTree})
    }else if(oldTree.type === newTree.type) {// 如果两个节点类型相同，才有比较的必要，否则直接删除即可
        let attrs = diffAttr(oldTree.props, newTree.props)
        if(Object.keys(attrs).length > 0) {
            currentPatch.push({type: ATTRS, attrs})
        }
        const oldChildren = oldTree.props.children
        const newChildren = newTree.props.children
        
        oldChildren && diffChildren(oldChildren, newChildren, index, patches)
    }else {
        currentPatch.push({type: REPLACE, newTree})
    }
    if(currentPatch.length > 0) {
        patches[index] = currentPatch
    }
}
function diffChildren(oldChildren, newChildren, index, patches) {
    oldChildren.forEach((oldChild, point) => {
        const newChild = newChildren[point]
        walk(oldChild, newChild, ++index+point, patches)
    })
}
function diffAttr(oldProps, newProps) {
    const patch = {}
    // 比较新旧值是否相等
    for(let key in oldProps) {
        if(key === 'children') {
            continue
        }
        const oldval = oldProps[key]
        const newval = newProps[key]
        if(oldval !== newval) {
            patch[key] = newval
        }
    }
    // 比较是否有新增的节点
    for(let key in newProps) {
        if(!oldProps.hasOwnProperty(key)) {
            patch[key] = newProps[key]
        }
    }
    return patch
}

export default diff