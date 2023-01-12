function createElements(elements){ 
    const section = document.querySelector('.container');

    for(let i = 0; i < elements.length ;i++){
        let {tag, texto} = elements[i];
        console.log(tag, texto);
        let element = document.createElement(tag);

        element.innerHTML = texto;
        section.appendChild(element);
    }
}
const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

createElements(elementos);