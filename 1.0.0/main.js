/*
G.JS
Initiol Release
V1.0.0
*/
const g = {}
g.v = {
    /* Variables as property of g.v, Organise variables; Only put important variables as variables and normal ones here, free up some variable names */
}
/* jQuery Compatable Selector */
g.element=(...params)=>{if($){return $(...params)}else{return document.querySelector(...params)}}
/* window controls */
g.window = {
    open = (...params)=>{window.open(params)}
}
/* Freeze Main object (g) */
Object.freeze(g)
/* Freeze Window Controls object (g.window) */
Object.freeze(g.window)