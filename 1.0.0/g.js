/*
G.JS
Initial Release
V1.0.0
*/
const g = {};
g.v = {/* variables */};
g.element=(selector, command, commandValue)=>{
    if (command == 'HTML' || command == 'html'){document.querySelector(selector).innerHTML = commandValue}
}
g.getElement = (selector, get) => {
    if (get == 'HTML' || get == 'html'){return document.querySelector(selector).innerHTML} else {return document.querySelector(selector)}}
g.replaceHTML = (selector, ...replaceparams) => {
    return document.querySelector(selector).innerHTML.replace(replaceparams)
}
g.window = {
    open: (...params)=>{window.open(params)}
}
Object.freeze(g)
Object.freeze(g.window)
v = g.v;