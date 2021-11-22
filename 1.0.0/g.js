/*
G.JS
Initial Release
V1.0.0
*/
const g = {};
g.v = {/* variables */};
g.element=(selector, command, commandValue)=>{
    if (command == 'HTML'){document.querySelector(selector).innerHTML = commandValue}
}
g.getElement = (...params) => {document.querySelector(...params)}
g.window = {
    open: (...params)=>{window.open(params)}
}
Object.freeze(g)
Object.freeze(g.window)
v = g.v;