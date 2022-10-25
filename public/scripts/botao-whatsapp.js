const botao = document.getElementById("botao-messagem");
botao.onclick = enviarMensagem;

function enviarMensagem() { 
    botao.blur();
    const numCelular = 5518991609780;      
    const url = `https://api.whatsapp.com/send?phone=${numCelular}&text=`
    window.open(url)
}