// FUNÇÃO RESPONSÁVEL POR ATUALIZAR OS DADOS

function atualizarDados() {

    // DADOS SIMULADOS

    // Temperatura entre 20°C e 35°C
    let temperatura = Math.floor(Math.random() * 16) + 20;

    // Umidade entre 40% e 80%
    let umidade = Math.floor(Math.random() * 41) + 40;

    // Luminosidade entre 0% e 100%
    let luminosidade = Math.floor(Math.random() * 101);

    // MOSTRAR DADOS NO HTML

    document.getElementById("temperatura").innerText = temperatura + " °C";
    document.getElementById("umidade").innerText = umidade + " %";
    document.getElementById("luminosidade").innerText = luminosidade + " %";

    // ANALISAR TEMPERATURA E APLICAR CORES DINÂMICAS

    let situacao;
    let elemSituacao = document.getElementById("situacao");

    if (temperatura < 25) {
        situacao = "🟢 Normal";
        elemSituacao.style.color = "#2e7d32"; // Verde
    } else if (temperatura < 30) {
        situacao = "🟡 Atenção";
        elemSituacao.style.color = "#f57f17"; // Amarelo
    } else {
        situacao = "🔴 Temperatura alta";
        elemSituacao.style.color = "#c62828"; // Vermelho
    }

    elemSituacao.innerText = situacao;

    // DATA E HORÁRIO

    let agora = new Date();
    let dataHora = agora.toLocaleString("pt-BR");

    document.getElementById("horario").innerText = dataHora;
}

// EXECUTA AUTOMATICAMENTE QUANDO A PÁGINA É ABERTA
atualizarDados();

// ATUALIZA OS DADOS AUTOMATICAMENTE A CADA 5 SEGUNDOS
setInterval(atualizarDados, 5000);