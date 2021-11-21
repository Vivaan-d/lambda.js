/*
G.JS
Initial Release
V1.0.0
*/
const g = {};
g.v = {
    /* Variables as property of g.v, Organise variables; Only put important variables as variables and normal ones here, free up some variable names */
};
/* Quick selecting and changing values */
g.element=(selector, command, commandValue)=>{
    if (command == 'HTML'){document.querySelector(selector).innerHTML = commandValue}
}
/* window controls */
g.window = {
    open: (...params)=>{window.open(params)}
}
/* Freeze Main object (g) */
Object.freeze(g)
/* Freeze Window Controls object (g.window) */
Object.freeze(g.window)