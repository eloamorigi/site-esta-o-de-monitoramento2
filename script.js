// FUNÇÃO RESPONSÁVEL POR ATUALIZAR OS DADOS
 
function atualizarDados() {
 
    // DADOS SIMULADOS
 
    // Temperatura entre 20°C e 35°C
    let temperatura =
        Math.floor(Math.random() * 16) + 20;
 
    // Umidade entre 40% e 80%
    let umidade =
        Math.floor(Math.random() * 41) + 40;
 
    // Luminosidade entre 0% e 100%
    let luminosidade =
        Math.floor(Math.random() * 101);
 
    // MOSTRAR DADOS NO HTML
 
    document.getElementById("temperatura").innerText =
        temperatura + " °C";
 
    document.getElementById("umidade").innerText =
        umidade + " %";
 
    document.getElementById("luminosidade").innerText =
        luminosidade + " %";
 
    // ANALISAR TEMPERATURA
 
    let situacao;
 
    if (temperatura < 25) {
        situacao = "🟢 Normal";
    }
    else if (temperatura < 30) {
        situacao = "🟡 Atenção";
    }
    else {
        situacao = "🔴 Temperatura alta";
    }
 
    document.getElementById("situacao").innerText =
        situacao;
 
    // DATA E HORÁRIO
 
    let agora = new Date();
 
    let dataHora =
        agora.toLocaleString("pt-BR");
 
    document.getElementById("horario").innerText =
        dataHora;
}
 
// EXECUTA AUTOMATICAMENTE QUANDO A PÁGINA É ABERTA
 
atualizarDados();