var leonardo = window.document.getElementById('leonardo')
var samantha = window.document.getElementById('samantha')
var bruna = window.document.getElementById('bruna')
var seta_direita = window.document.getElementById('seta-direita')
var seta_esquerda = window.document.getElementById('seta-esquerda')

function rolaParaDireita(){
    leonardo.style = 'display:none;'
    bruna.style = 'display:flex;'
    seta_direita.style = 'display:none;'
    seta_esquerda.style = 'display:flex; margin-top:150%;'
}
function rolaParaEsquerda(){
    leonardo.style = 'display:flex;'
    bruna.style = 'display:none;'
    seta_direita.style = 'display:flex;'
    seta_esquerda.style = 'display:none; margin-top:150%;'
}