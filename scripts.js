// Passo 1: Saber quando o botão foi clicado
// Passo 2: Pegar o que está dentro do input
// Passo 3: Ir no servidor e pegar as info do tempo atualizadas
// Passo 4: Colocar as info na tela

const chave = "d3ddc25c980d0d6df60b375582e340c4"

function colocarDadosNaTela(dados) {

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "ºC"
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".text-icone").innerHTML = dados.weather[0].description
    document.querySelector(".icone").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    
}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocarDadosNaTela(dados)
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}



