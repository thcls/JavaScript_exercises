document.addEventListener('click', click);

let num = '';
let expression = [];
let aux = [];

function click(event){
    displayer = document.querySelector('.displayer');
    let element = event.target;
    
    if (!isNaN(Number(element.innerText))) {
        displayer.innerHTML += element.innerText;
        num += element.innerText;
        
    }else if (element.innerText === '=') {
        console.log(expression,num);
        if(num !== ''){
            expression.push(Number(num));
        }
        displayer.innerText = expression1(expression);

    }else if (element.innerText === '<') {
        displayer.innerHTML = displayer.innerText.substring(0, displayer.innerText.length - 1);
        num.substring(0, displayer.innerText.length - 1);

    }else if (element.innerText === 'C') {
        displayer.innerText = '';
        expression = [];
        num = '';

    }else if (element.innerText === '(') {
        displayer.innerText += '(';
        aux = expression;
        expression = [];
    }else if (element.innerText === ')') {
        expression.push(Number(num));
        num = '';
        displayer.innerText += ')';
        aux.push(expression);
        expression = aux;
        aux = [];

    }else if (element.innerText === '/') {
        displayer.innerText += '/';
        expression.push(Number(num));
        num = '' ;
        expression.push('/');

    }else if (element.innerText === '*') {
        displayer.innerText += '*';
        expression.push(Number(num));
        num = '' ;
        expression.push('*');
    }else if (element.innerText === '-') {
        if (num === ''){
            displayer.innerHTML += '-';
            num += '-';
        }
        else{
            displayer.innerText += '-';
            expression.push(Number(num));
            num = '' ;
            expression.push('-');
        }
    }else if (element.innerText === '+') {
        displayer.innerText += '+';
        expression.push(Number(num));
        expression.push('+');
        num = '' ;
    }else if (element.innerText === ',') {
        displayer.innerText += ',';
        num += '.';
    }
    console.log(expression)
}

function expression1(expression){
    if (expression.length === 1){
        return expression.shift();
    }
    let n;
    n = expression.findIndex(n => n==='*'||n==='/')

    if(n!==-1){
        expression = getOp(n, expression);
        return expression1(expression);
    }
    else{
        n = expression.findIndex(n => n==='+'||n==='-')
        if (n!==-1){
                expression = getOp(n, expression);
                return expression1(expression);
        }
    }
}

function calc(x, y, operation){
    let result;
    
    if (Array.isArray(x)){
        x = expression1(x)
    }
    if (Array.isArray(y)){
        y = expression1(y)
    }
    if (operation === '+'){
        result = x + y;
    }else if (operation === '*'){
        result = x * y;
    }else if (operation === '/'){
        result = x / y;
    }else if (operation === '-'){
        result = x - y;
    }
    
    return result;
}

function getOp(n, expression){
    let e = '';
    let x, y;

    e = expression[n];
    x = expression.splice(n-1, 1);
    y = expression.splice(n, 1);
    expression[n-1] = calc(x[0],y[0],e);

    return expression;
}