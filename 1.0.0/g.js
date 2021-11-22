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

g.window = {
    open: (...params)=>{window.open(params)}
}
Object.freeze(g)
Object.freeze(g.window)
v = g.v;