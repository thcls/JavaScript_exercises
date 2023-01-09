function main(){
    const form = document.querySelector('.forms');
    form.addEventListener('submit', calcularImc);
    function calcularImc(event){
        event.preventDefault();

        const peso = Number.parseFloat(form.querySelector('#peso').value);
        const altura = Number.parseFloat(form.querySelector('#altura').value);

        const imc = peso / Math.pow(altura, 2);
        
        let msg;
        const result = document.querySelector('#resultado');

        let id = 'true'

        if(isNaN(imc)){
           msg = 'Digite um valor valido';
            id = 'false'
        }
        else if(imc <= 18.5){
           msg = 'Abaixo do peso';
        }
        else if(imc >= 18.5 && imc <= 24.9){
           msg = 'Peso normal';
        }
        else if(imc >= 25 && imc <= 29.9){
           msg = 'Sobrepeso.';
        }
        else if(imc >= 30 && imc <= 34.9){
           msg = 'Obesidade grau 1';
        }
        else if(imc >= 35 && imc <= 39.9){
           msg = 'Obesidade grau 2';
        }
        else if(imc > 40){
           msg = 'Obesidade grau 3';
        }
        if (isNaN(imc)){
            result.innerHTML = `<p id="${id}">${resul}.</p>`;
        }
        else{
            result.innerHTML = `<p id="${id}">Seu IMC é ${imc.toFixed(2)} (${resul}).</p>`;
        }
    }
}

main();
    
