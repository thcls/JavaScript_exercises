function main(){
    const form = document.querySelector('.form');
    form.addEventListener('submit', receberEventoForm)

    function criarPessoa(nome, sobrenome, peso, altura){
        return{
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura
        }
        
    }
    const pessoas = []
    function receberEventoForm(evento){
        evento.preventDefault()

        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        const pessoa = criarPessoa(nome.value, sobrenome.value, peso.value, altura.value)
        pessoas.push(pessoa)

        const resultados = document.querySelector('.resultados');
        resultados.innerHTML += `<p>${pessoa.nome} ${pessoa.sobrenome} ${pessoa.peso} ${pessoa.altura}</p>`
    }
    console.log(pessoas)
}

main();