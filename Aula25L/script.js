const botao = document.getElementById("btn")
const texto = document.getElementById("texto")

const botao2 = document.getElementById("btn2")
const meuParagrafo = document.getElementById("meuParagrafo")

const botao3 = document.getElementById("btn3")

const paragrafo = document.getElementById("paragrafo3")

function alteraTexto() {
    texto.innerText = "O texto foi alterado"
}

function alteraTexto2() {
    // meuParagrafo.textContent = "Você passou o mouse por cima"
    if (meuParagrafo.innerText === "É FEIJOADA.") {
        meuParagrafo.innerText = "Encosta aí:"
    } else {
        meuParagrafo.innerText = "É FEIJOADA."
    }
}

// Utilizando funções com o Mouse 

function passeMouse() {
    meuParagrafo.textContent = "Você passou o mouse de cima"
}

function tireMouse() {
    meuParagrafo.textContent = "Você tirou o mouse de cima"
}

function clickDuasVezes() {
    alert("Você clicou duas vezes!")
}

function pressionaTecla(event) {

    // paragrafo3.textContent = ('Tecla pressionada: ' + event.key) //par aparecer as teclas pressionadas sem somar

    paragrafo3.textContent += event.key //para somar todas as teclas pressionadas
}

//forma mais direta para chamar um evento com função direto
document.addEventListener("keydown", function (event) {
    paragrafo3.textContent = 'Tecla pressionada: ' + event.key
}) 

// botao2.addEventListener("mouseover", alteraTexto2)

botao.addEventListener("click", alteraTexto)
botao2.addEventListener("mouseover", passeMouse)
botao2.addEventListener("mouseout", tireMouse)
botao3.addEventListener("dblclick", clickDuasVezes)
document.addEventListener('keydown', pressionaTecla)  

//para conseguir acessar as teclas tem que usar F12 e ir para mensagens do usuário.

//Formulários

//Pega o elemento com o id 'formulario' e o armazena em uma variável
const form = document.getElementById('formulario')
//Pega o elemento com o id 'mensagem' e o armazena em uma variável
const msgm = document.getElementById('mensagem')


//Evento que faz com que envie os dados do formulário ao clicar no submit
// o  evento "event", evita o envio real do formulário
form.addEventListener('submit', function(event) {
    event.preventDefault();   
    alert('Formulário enviado')
}
)

//Evento de foco no campo de texto ]
msgm.addEventListener('focus', function() {
    msgm.style.backgroundColor = '#A4EA4F'
})

//Evento de blur no campo de texto (blur é quando perdeo foco)
msgm.addEventListener('blur', function() {
    msgm.style.backgroundColor = 'white'
})

//Evento de mudança no campo de texto
msgm.addEventListener('change', function() {
    console.log('Valor alertado para: ' + msgm.value);
})

window.addEventListener('scroll', function() {
    console.log('Apágina foi rolada. Posição de scroll: ' + window.scrollY);
});
