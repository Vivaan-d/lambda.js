/*
lambda.JS (λ)
release: 1.1.0
author: Vivaan D.
description: A simple, lightweight, and easy-to-use JavaScript library for DOM manipulation and utility functions.
usage:
    λ(selector:string/HTMLElement) // Selects an element or elements
    λ(selector, true) // Returns a function with the selected element
    λ(selector, false, true) // Returns all elements matching the selector
    λ(selector).css() // Returns a function to manipulate CSS properties
    λ(selector).addhtml() // Adds HTML to the selected element
    λ(selector).sethtml() // Sets HTML for the selected element
    λ(selector).dupe() // Duplicates the selected element
    λ.alert() // Displays an alert message
    λ.getxhr(url, callback()) // Makes an XMLHttpRequest executes a callback function
    λ.replacehtml() // Replaces HTML in the selected element
    λ.repeat() // Repeats a function a specified number of times
    λ.window.open() // Opens a new window
    λ.v // Version information
    λ.tmpl // Template strings
    λ.tmpl.alert // Alert template
V1.1.0

GitHub & Documentation: 
https://github.com/Vivaan-d/lambda.js
*/
var l=0;
var ldint=setInterval(()=>{log++},1)

var λDEVMODE=false;
var λDEVALERTVIS=true;
var devlog=(log,warn)=>{if(λDEVMODE)warn?λ.warn("λ DEVLOG WARNING: "+String(log)):λ.log("λ DEVLOG: "+String(log))}
const λ = (qs,ch,all) => {
    if(ch){
        let elm=λ.elm(qs)
        
        let f={
            elm:elm,
            ex:[],
            delete:()=>λ.q(qs).remove(),
            replace:(x,y)=>{λ.replacehtml(elm,x,y);devlog(this);devlog(f);return f;},
            add:(x)=>{λ.addhtml(elm,x);devlog(this);devlog(f);return f;},
            set:(x)=>{λ.sethtml(elm,x);devlog(this);devlog(f);return f;},
            dupe:()=>{let d=λ.dupe(elm);elm.insertAdjacentElement("afterend",d);f.ex.push({e:d,c:λ(d,1)});devlog(this);devlog(f);return f;},
            css:()=>{return λ.css(elm)}
        }
        if(all)devlog(all," all + ch");λ.warn("λ Warning: 'all' can not be used along with 'ch'==true. Treating 'all' as false.");
        return f;
    }else{
        let a=λ.q(qs,all)
        devlog(qs,all,a);
        return a
    }
};

λ.logs=[];
λ.log=(x="λ Log: Unspecificed")=>{console.log(x);logs.push([x,"log",new Date().toLocaleString()])}
λ.warn=(x="λ Warn: Unspecificed")=>{console.warn(x);logs.push([x,"warn",new Date().toLocaleString()])}
λ.err=(x="λ Err: Unspecificed")=>{console.error(x);logs.push([x,"error",new Date().toLocaleString()])}

λ.cc = function(str) {
    return String(str).replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}
λ.css = (qs) => { // lazily made for real use
    if(!qs){λ.err("λ Error: 'qs' is not defined.");return null}
    let elm=λ.elm(qs)
    if(!elm.style){λ.err(`λ Error: Invalid element reference. Ref: ${typeof qs} 'qs': `,qs);return null}
    let f={
        elm:elm,
        bg:(s,m)=>{
            if(m==="col"){elm.style.backgroundColor=s}
            else if(m==="img"){elm.style.backgroundImage=s}
            else if(m==="pos"){elm.style.backgroundPosition=s}
            else if(m==="rep"){elm.style.backgroundRepeat=s}
            else if(m==="attachment"){elm.style.backgroundAttachment=s}
            else{elm.style.background=s}
            return f;
        },
        bdr:(s="2px,solid,black")=>{elm.style.border=s;return f;},
        col:(s="black")=>{elm.style.color=s;return f;},
        pos:(s="relative")=>{elm.style.position=s;return f;},
        absol:()=>{elm.style.position="absolute";return f;},
        relat:()=>{elm.style.position="relative";return f;},
        fixed:()=>{elm.style.position="fixed";return f;},
        bdr_rad:(s="10px")=>{elm.style.borderRadius=s;return f;},
        pad:(s="5px")=>{elm.style.padding=s;return f;},
        block:()=>{elm.style.display="block";return f;},
        hw:(h,w)=>{if(h!=null){elm.style.height=h};if(w!=null){elm.style.width=w};return f;},
        other:(st,s)=>{elm.style[λ.cc(st)]=s;return f},
        sesl:()=>{return λ(elm,1);},
        λ:()=>{return λ(elm,1);}
    }
    return f;
};
λ.v = {};
λ.tmpl={
    alert:`<div class="lambda-alert" style="border-radius:30%;border:solid,skyblue,6px;padding:5px;display:block!important;position:fixed!important;top:20px;right:20px;height:200px;width:600px;background-color:deepskyblue!important;color:white!important;"><h4>||</h4><p>||</p></div>`
}
λ.q=(qs,all)=>{if(all){return document.querySelectorAll(qs)}else{return document.querySelector(qs)}}
λ.elm=(e)=>{if(typeof e == "object"){return e}else if(typeof e=="string"){return λ(e)}else{λ.warn(`λ Warning: variable "${e}" can not be parsed as an element`)}}
λ.lw=(x)=>{return String(x).toLowerCase()}
λ.hw=(x)=>{return String(x).toUpperCase()}
λ.inhtml=(elm) => {
    return λ.elm(elm).innerHTML
}

λ.addhtml=(elm,str) => {
    λ.elm(elm).innerHTML+=String(str)
    return λ.elm(elm).innerHTML
}
λ.sethtml=(elm,str) => {
    λ.elm(elm).innerHTML=String(str)
    return λ.elm(elm).innerHTML
}
λ.rand=(x1,x2) => {
    return Math.random()*(x2-x1)+x1;
}
λ.num=(x) => {
    return Number(x);
}
λ.str=(x) => {
    return String(x);
}
λ.window={
    open: (...params)=>{window.open(...params)}
}
λ.localstorage=(...p)=>{
    var f={
    set:(k,v)=>{localStorage.setItem(k,v);return λ.localstorage.get(k);return f;},
    get:(k)=>{return localStorage.getItem(k);return f;},
    del:(k)=>{localStorage.removeItem(k);return λ.localstorage.get(k);return f;},
    clear:()=>{localStorage.clear();return f;},
    keys:()=>{let obj={};for (let i=0;i<localStorage.length;i++){let key=localStorage.key(i);obj[key]=λ.localstorage.get(key)};return obj}, // these 7 can't be chained. not like they would if they could
    keynms:()=>{let arr=[];for (let i=0;i<localStorage.length;i++){arr.push(localStorage.key(i))};return arr},
    vals:()=>{let arr=[];for (let i=0;i<localStorage.length;i++){arr.push(localStorage.getItem(localStorage.key(i)))};return arr},
    length:()=>{return localStorage.length},
    has:()=>{if(localStorage.length>0){return true}else{return false}},
    isEmpty:()=>{if(localStorage.length==0){return true}else{return false}},
    isFull:()=>{if(localStorage.length==localStorage.length){return true}else{return false};}
    }
    if(p){f[p](p.shift())}
    return f;
}
λ.dupe=(qs,adj)=>{let elm=λ.elm(qs);let d=elm.cloneNode(true);if(adj){elm(adj).insertAdjacentElement("afterend",d);return d;}else{elm.insertAdjacentElement("afterend",d);return d;}}
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
    xhr.onerror=()=>{λ.err(`λ Error: ${xhr.statusText} STATUS: ${xhr.status}`)};
    xhr.addEventListener("readystatechange",(e) => {if (xhr.readyState===4){func(e,xhr.responseText,xhr.status,xhr.statusText);}});
}
λ.replacehtml=(elm,x,y)=>{
    λ.elm(elm).innerHTML=λ.elm(elm).innerHTML.replace(x,y)
}
λ.repeat=(func,amt,interval)=>{if(interval){let i=0;let s=setInterval(()=>{if(i<amt){i++;func()}else{clearInterval(s)}},interval);return s;}else{for (let i=0;i<amt;i++) {func()}}}
Object.freeze(λ)
Object.freeze(λ.window)
Object.freeze(λ.tmpl)
const v = λ.v;
const lambda=λ
clearInterval(ldint)
λ.log("λ.js successfully loaded.")