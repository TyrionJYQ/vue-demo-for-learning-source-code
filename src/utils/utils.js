export function createElement(type) {
    const ele = document.createElement(type)
    ele.setAttribute('id', 'app')
    document.body.appendChild(ele)
}