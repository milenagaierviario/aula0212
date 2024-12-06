console.log("Hello World")

// "document.getElementById( )" que dizer que vai buscar no html o ID com o nome escolhido.
const botao = document.getElementById("btn")

function imprimeFrase() {
    // console.log 
    alert("Click")
}
// por último adicionamos um evento que vai executar a função quando alguma ação ocorrer. O primeiro parâmentro é a ação, o segundo parâmetro é a função que queremos executar.
botao.addEventListener("click", imprimeFrase);


const botao2 = document.getElementById("btn2")

function trocaCorFundo() {
    botao.style.backgroundColor = '#98EDED'
}

botao2.addEventListener("click" , trocaCorFundo)

function trocaCorFundo (){
    if (botao.style.backgroundColor === 'red') {
        botao.style.backgroundColor = '#f19797a0'
    } else {
        botao.style.backgroundColor = 'red'
    }

}

