# lambda.js
## variables
λ | base
λ = lambda | alternative (lambda is non-constant)
λ.v = v | variable alternative (v is non-constant)

## properties
### λ
λ.v{} | variable alternative
λ.tmpl{} | template elements
λ.q() | queryselector short form
λ.lw/hw() | lowercase/uppercase string
λ.modf(element, command, ...input) | modify element
> Element: element to modify
> Command: html (change innerHTML)|delete/del (use .remove())
> ...input: miscellanious input
λ.inhtml(element) | returns innerhtml
λ.addhtml(element,string) | adds string to innerhtml