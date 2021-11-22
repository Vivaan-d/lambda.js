/*
G.JS
Initial Release
V1.0.0
*/
const g = {};
g.v = {/* variables */};
g.element=(selector, command, commandValue)=>{
    if (command == 'HTML'){document.querySelector(selector).innerHTML = commandValue}
    else if (command == 'html'){document.querySelector(selector).innerHTML = commandValue}
}
g.getElement = (selector, get) => {
    if (get == 'HTML'){return document.querySelector(selector).innerHTML} 
    else if (get == 'html'){return document.querySelector(selector).innerHTML} else {return document.querySelector(selector)}}
g.replaceHTML = (selector, ...replaceparams) => {
    return document.querySelector(selector).innerHTML.replace(replaceparams)
}
g.window = {
    open: (...params)=>{window.open(params)}
}
Object.freeze(g)
Object.freeze(g.window)
v = g.v;