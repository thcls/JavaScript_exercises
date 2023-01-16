document.addEventListener('click', click)
let num = ''
let expression = []
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
        expression1(expression)
        num += expression.push(Number(num))
        displayer.innerText = num

    }else if (element.innerText === '<') {
        displayer.innerHTML = displayer.innerText.substring(0, displayer.innerText.length - 1);
        num.substring(0, displayer.innerText.length - 1)

    }else if (element.innerText === 'C') {
        displayer.innerText = ''
        expression = []
        num = ''

    }else if (element.innerText === '(') {
        
        displayer.innerText += '('
        expression.push('(')

    }else if (element.innerText === ')') {
        
        displayer.innerText += ')'
        expression.push(')')

    }else if (element.innerText === '/') {
        displayer.innerText = ''
        expression.push(Number(num))
        num = '' 
        expression.push('/')

    }else if (element.innerText === '*') {
        displayer.innerText = ''
        expression.push(Number(num))
        num = '' 
        expression.push('*')
    }else if (element.innerText === '-') {
        if (num === ''){
            displayer.innerHTML += '-'
            num += '-'
        }
        else{
            displayer.innerText = ''
            expression.push(Number(num))
            num = '' 
            expression.push('-')
        }
    }else if (element.innerText === '+') {
        displayer.innerText = ''
        expression.push(Number(num))
        expression.push('+')
        num = '' 
    }else if (element.innerText === ',') {
        displayer.innerText += ','
        num += '.'
    }
    console.log(expression)
}
function expression1(expression){
    if (expression.length === 1){
        return expression.shift()
    }
    let result
    let x,y
    x = expression.shift()
    e = expression.shift()
    y = expression.shift()
    

    result = calc(x,y,e)
    expression.unshift(result)
    console.log(result)
    return expression1(expression)
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