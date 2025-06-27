const botaoMostrarPalavras = document.querySelector('#botao-palavrachave');

botaoMostrarPalavras.addEventListener('click', mostraPalavraChave);

function mostraPalavraChave() {
    //alert("Fui clicado!");
    const texto = document.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavras = texto.split(" ")

    campoResultado.textcontent = palavras.join(", ");
}