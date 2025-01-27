let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2} );
}

function exibrMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto!' );
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10' );
}

exibrMensagemInicial();

function verificarChute(){

    let chute = document.querySelector('input').value;

   if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Voce acertou!!');
        let  palavratentativa = tentativas >1 ? 'Tentativas' : 'tentativa';
        let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavratentativa}!`;

        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
    if (chute > numeroSecreto) {
        exibirTextoNaTela('p','O numero secreto é menor que '+chute);
    } else {
        exibirTextoNaTela('p','O numero secreto é maior que '+chute);
    }
    tentativas ++;
    limparCampo();
   
   }
   
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
        
    } 

   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
   }else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
   }
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
  
    document.getElementById('reiniciar').setAttribute('disabled', true);
    exibrMensagemInicial();

}