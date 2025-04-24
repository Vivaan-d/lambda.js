/*
lambda.JS (λ)
Reintroduction
V1.0.1

GitHub & Documentation: 
https://github.com/Vivaan-d/lambda.js
*/
const λ = (qs,ch,all) => {
    if(ch){
        let elm=λ.q(qs)
        return {
            elm:elm,
            delete:()=>λ.q(qs).remove(),
            html:()=>{return {elm:elm,replace:(x,y)=>{λ.replaceHTML(elm,x,y);return this}}}
        }
    }else{
        return λ.q(qs,all)
    }
};
λ.v = {};
λ.tmpl={
    alert:`<div class="lambda-alert" style="padding:5px;display:block!important;position:fixed!important;top:20px;right:20px;height:200px;width:600px;background-color:deepskyblue!important;color:white!important;"><h4>||</h4><p>||</p></div>`
}
λ.q=(qs,all)=>{if(all){return document.querySelectorAll(qs)}else{return document.querySelector(qs)}}
λ.elm=(e)=>{if(typeof e == "object"){return e}else if(typeof e=="string"){return λ(e)}else{console.warn(`λ Warning: variable "${e}" can not be parsed as an element`)}}
λ.lw=(x)=>{return String(x).toLowerCase()}
λ.hw=(x)=>{return String(x).toUpperCase()}
λ.inhtml=(elm) => {
    return λ.elm(elm).innerHTML
}

λ.addhtml=(elm,str) => {
    λ.elm(elm).innerHTML+=String(str)
    return λ.elm(elm).innerHTML
}
λ.window={
    open: (...params)=>{window.open(...params)}
}
λ.alert=(arg1,arg2,timeout=2000)=>{
    let alertArr=λ.tmpl.alert.split("||")
    let elm=document.createElement("div")
    λ.q("body").appendChild(elm)
    elm.innerHTML=alertArr[0]+arg1+alertArr[1]+arg2+alertArr[2]
    setTimeout(() => {
        elm.remove()
    }, timeout);
}
λ.getxhr=(address,func)=>{
    var xhr=new XMLHttpRequest
    xhr.open("GET",address)
    xhr.send()
    xhr.onerror=()=>{console.error(`λ Error: ${xhr.statusText} STATUS: ${xhr.status}`)};
    xhr.addEventListener("readystatechange",(e) => {if (xhr.readyState===4){func(e,xhr.responseText,xhr.status,xhr.statusText);}});
}
λ.replaceHTML=(elm,x,y)=>{
    λ.elm(elm).innerHTML=λ.elm(elm).innerHTML.replace(x,y)
}
λ.repeat=(func,amt,interval)=>{if(interval){let i=0;let s=setInterval(()=>{if(i<amt){i++;func()}else{clearInterval(s)}},interval);return s;}else{for (let i=0;i<amt;i++) {func()}}}
Object.freeze(λ)
Object.freeze(λ.window)
Object.freeze(λ.tmpl)
const v = λ.v;
const lambda=λ