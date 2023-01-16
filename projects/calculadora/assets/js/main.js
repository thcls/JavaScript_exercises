document.addEventListener('click', click)
document.addEventListener('type', click)

let num = ''
let expression = []
let aux = []
console.log(expression.length)

function click(event){
    displayer = document.querySelector('.displayer')
    let element = event.target
    
    if (!isNaN(Number(element.innerText))) {
        console.log(element.innerText)
        displayer.innerHTML += element.innerText
        num += element.innerText
        
    }else if (element.innerText === '=') {
        expression.push(Number(num))
        displayer.innerText = expression1(expression)

    }else if (element.innerText === '<') {
        displayer.innerHTML = displayer.innerText.substring(0, displayer.innerText.length - 1);
        num.substring(0, displayer.innerText.length - 1)

    }else if (element.innerText === 'C') {
        displayer.innerText = ''
        expression = []
        num = ''

    }else if (element.innerText === '(') {
        displayer.innerText += '('
        aux = expression
        expression = []
    }else if (element.innerText === ')') {
        expression.push(Number(num))
        num = '' 
        displayer.innerText += ')'
        aux.push(expression)
        expression = aux
        aux = []

    }else if (element.innerText === '/') {
        displayer.innerText += '/'
        expression.push(Number(num))
        num = '' 
        expression.push('/')

    }else if (element.innerText === '*') {
        displayer.innerText += '*'
        expression.push(Number(num))
        num = '' 
        expression.push('*')
    }else if (element.innerText === '-') {
        if (num === ''){
            displayer.innerHTML += '-'
            num += '-'
        }
        else{
            displayer.innerText += '-'
            expression.push(Number(num))
            num = '' 
            expression.push('-')
        }
    }else if (element.innerText === '+') {
        displayer.innerText += '+'
        expression.push(Number(num))
        expression.push('+')
        num = '' 
    }else if (element.innerText === ',') {
        displayer.innerText += ','
        num += '.'
    }
}
function expression1(expression){
    console.log(expression)
    if (expression.length === 1){
        return expression.shift()
    }
    let result
    let x,y,n
    for (i in expression){
        if (Array.isArray(expression[n])){
            return expression[n] = expression1(expression[n])
    }
    n = expression.findIndex(n => n==='*'||n==='/')
    if(n!==-1){
            e = expression[n]
            x = expression.splice(n-1, 1)
            y = expression.splice(n, 1)
            expression[n-1] = calc(x[0],y[0],e)
            return expression1(expression)
        }else{
            n = expression.findIndex(n => n==='+'||n==='-')
            if (n!==-1){
                e = expression[n]
                console.log(expression)
                x = expression.splice(n-1, 1)
                console.log(expression)
                y = expression.splice(n, 1)
                expression[n-1] = calc(x[0],y[0],e)
                console.log(n,expression,'-----------------')
                return expression1(expression)
                
            }
        }

    }
}
function plus(x, y){
    return x + y
}
function minus(x, y){
    return x - y
}
function times(x, y){
    return x * y
}
function divided (x, y){
    return x / y
}

function calc(x, y, e){
    let result
    if (Array.isArray(x)){
        x = expression1(x)
    }
    if (Array.isArray(y)){
        y = expression1(y)
    }
    if (e === '+'){
        result = plus(x,y)
    }else if (e === '*'){
        result = times(x,y)
    }else if (e === '/'){
        result = divided(x,y)
    }else if (e === '-'){
        result = minus(x,y)
    }
    return result
}