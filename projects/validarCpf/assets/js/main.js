
document.addEventListener('submit', event =>{
    event.preventDefault()
    
    let cpf = getCpf()

    let cpflimpo = cpf.replace(/\D+/g,'')
    cpflimpo = Array.from(cpflimpo)
    let cpfResult = cpflimpo.slice(0,9)

    validar(cpfResult)
    validar(cpfResult)

    result(cpfResult, cpflimpo)
})
function getCpf(){
    const element = document.querySelector('.cpf')
    return element.value
}
function result(cpf1, cpf2){
    const result = document.querySelector(".result")
    if (cpf1.toString() === cpf2.toString()){
        result.innerText ='CPF Válido'
        result.style.color = '#00FF00'
    }else{
        result.innerText ='CPF inválido'
        result.style.color = '#FF0000'
    }
}
function validar(cpf){
    const result = cpf.reduce((acc, value, index)=>{
        
        value = parseInt(value)
        return acc += value * (cpf.length+1 - index)
        
    },0)
    
    cpf.push(hash(result))
}
function hash(value){
    const result = 11 - (value % 11) 
    if(result > 9){
        return '0'
    }else{
        return `${result}`
    }
}