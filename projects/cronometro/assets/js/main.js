const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

let time = new Date(0)
let tim;

iniciar.addEventListener('click', function(){
    clearInterval(tim)
    tim = setInterval(function(){
        time.setSeconds(time.getSeconds()+1)
        const timer = document.querySelector('.timer') 
        timer.innerHTML = time.toLocaleTimeString('pt-BR', {hour12:false,timeZone:'GMT'})
    }, 1000)
    
    const timer = document.querySelector('.timer')
    timer.style.color = '#000000'
});

pausar.addEventListener('click', function(){
    clearInterval(tim)
    const timer = document.querySelector('.timer')
    timer.style.color = '#FF0000'
});

zerar.addEventListener('click', function(){
    clearInterval(tim)
    const timer = document.querySelector('.timer')
    timer.style.color = '#FF0000'
    time = new Date(0)
    timer.innerHTML = time.toLocaleTimeString('pt-BR', {hour12:false,timeZone:'GMT'})
    setTimeout(function(){
        timer.style.color = '#000000'
    }, 500);
});

