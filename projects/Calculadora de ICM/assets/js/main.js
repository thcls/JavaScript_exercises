function main(){
   function getImc(peso, altura){
      const imc = peso / Math.pow(altura, 2);
      return imc
   }

   function criaP(){
      const p = document.createElement('p')
      return p;
   }

   function setResult(msg, id){
      const result = document.querySelector("#resultado")

      const p = criaP()
      
      result.innerHTML = ''

      p.classList.add(id)
      p.innerHTML = ''
      p.innerHTML = msg

      result.appendChild(p)
   }

   function avaliarImc(imc){
      let msg;

      

      if(imc <= 18.5){
         msg = 'Abaixo do peso';
      }
      else if(imc >= 18.5 && imc <= 24.9){
         msg = 'Peso normal';
      }
      else if(imc >= 25 && imc <= 29.9){
         msg = 'Sobrepeso';
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
      
      return `Seu IMC é ${imc.toFixed(2)} (${msg})`;
   }

   function calcular(event){
      event.preventDefault();

      const peso = Number.parseFloat(form.querySelector('#peso').value);
      const altura = Number.parseFloat(form.querySelector('#altura').value);

      const imc = getImc(peso, altura)
      let msg;
      let id = 'true';
      
      if(isNaN(peso)){
         msg = 'Digite um peso valido';
         id = 'false';
      }
      else if(isNaN(altura)){
         msg = 'Digite uma altura valida';
         id = 'false';
      }
      else{
         msg = avaliarImc(imc);
      }

      setResult(msg, id);
    }

   const form = document.querySelector('.forms');
   form.addEventListener('submit', calcular);
}

main();
    
