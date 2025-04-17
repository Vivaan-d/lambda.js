/*
lambda.JS
Reintroduction
V1.0.1
*/
const λ = {};
λ.v = {};
λ.tmpl={
    alert:`<div class="lambda-alert" style="padding:5px;display:block!important;position:fixed!important;top:20px;right:20px;height:200px;width:600px;background-color:deepskyblue!important;color:white!important;"><h4>||</h4><p>||</p></div>`
}
λ.q=(...qs)=>{return document.querySelector(...qs)}
λ.lw=(x)=>{return String(x).toLowerCase()}
λ.hw=(x)=>{return String(x).toUpperCase()}
λ.modf=(elm, cmd, ...val)=>{
    if(λ.lw(cmd)=='html'){λ.q(elm).innerHTML=val[0]}
    else if(cmd=='del'||cmd=='delete'){λ.q(elm).remove()}
}
λ.inhtml = (elm) => {
    return λ.q(elm).innerHTML
}
λ.replaceHTML = (elm, ...replaceparams) => {λ.q(elm).innerHTML=λ.q(elm).innerHTML.replace(...replaceparams)}
λ.window = {
    open: (...params)=>{window.open(params)}
}
λ.alert=(arg1,arg2,timeout)=>{
    let alertArr=λ.tmpl.alert.split("||")
    let elm=document.createElement("div")
    λ.q("body").appendChild(elm)
    elm.innerHTML=alertArr[0]+arg1+alertArr[1]+arg2+alertArr[2]
    setTimeout(() => {
        elm.remove()
    }, timeout);
}
Object.freeze(λ)
Object.freeze(λ.window)
Object.freeze(λ.tmpl)
v = λ.v;
