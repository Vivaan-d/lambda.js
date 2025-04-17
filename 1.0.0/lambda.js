/*
lambda.JS
Reintroduction
V1.0.0
*/
const λ = {};
λ.v = {/* variables */};
λ.element=(selector, command, commandValue)=>{
    if (command == 'HTML'){document.querySelector(selector).innerHTML = commandValue}
    else if (command == 'html'){document.querySelector(selector).innerHTML = commandValue}
}
λ.getElement = (selector, get) => {
    if (get == 'HTML'){return document.querySelector(selector).innerHTML} 
    else if (get == 'html'){return document.querySelector(selector).innerHTML} else {return document.querySelector(selector)}}
λ.replaceHTML = (selector, ...replaceparams) => {
    return document.querySelector(selector).innerHTML.replace(replaceparams)
}
λ.window = {
    open: (...params)=>{window.open(params)}
}
Object.freeze(λ)
Object.freeze(λ.window)
v = λ.v;
