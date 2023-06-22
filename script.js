const vermelho = document.getElementById('vermelho');
const verde = document.getElementById('verde');
const amarelo = document.getElementById('amarelo');
const azul = document.getElementById('azul');
const jogarMaquina = document.getElementById('jogarMaquina')
    // Lógica 
let vetjogador = [],
    vetmaq = [];
jogar();

vermelho.onclick = () => {
    setTimeout(() => {
        vermelho.style.backgroundColor = 'rgb(241, 70, 70)'
    }, 500);
    vermelho.style.backgroundColor = '#FA8072'
    vetjogador.push(1)
    console.log('Jogador' + vetjogador)
}
verde.onclick = () => {
    setTimeout(() => {
        verde.style.backgroundColor = 'rgb(145, 183, 145)'
    }, 500);
    verde.style.backgroundColor = 'rgb(153, 211, 153)'
    vetjogador.push(2)
    console.log('Jogador' + vetjogador)
}
amarelo.onclick = () => {
    setTimeout(() => {
        amarelo.style.backgroundColor = 'rgb(255, 255, 111)'
    }, 500);
    amarelo.style.backgroundColor = 'rgb(255, 255, 164)'
    vetjogador.push(3)
    console.log('Jogador' + vetjogador);
}
azul.onclick = () => {
    setTimeout(() => {
        azul.style.backgroundColor = 'rgb(160, 160, 255)'
    }, 500);
    azul.style.backgroundColor = 'rgb(195, 195, 251)'
    vetjogador.push(4)
    console.log('Jogador' + vetjogador);
}


jogarMaquina.onclick = () => {
    jogar();
};

function jogar() {
    vetmaq.push(Math.floor(Math.random() * 4 + 1));
    console.log('Maquina', vetmaq);
};

////////////////////// solução 1 /////////////////
function verifygame(){
    const resp = vetmaq.map( function(elemento, indice, array){
        //console.log(indice);
        //console.log(array);
        if(vetjogador[indice]== elemento){
            return 1;
        }else{
            vetmaq=[];
            return 0;

        }
    });
    console.log('Teste de acerto = ' + resp);

}