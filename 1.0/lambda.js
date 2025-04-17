/*
lambda.JS
Reintroduction
V1.0.1
*/
const λ = {};
λ.v = {};
λ.lw=(x)=>{String(x).toLowerCase()}
λ.lwArr=(...x)=>{for(let i=0,i<x.length,i++){String(x[i]).toLowerCase()}}
λ.modf=(elm, cmd, ...val)=>{
    if(cmd=='HTML'){document.querySelector(elm).innerHTML=val[0]}
    else if(cmd=='idk'){}
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
