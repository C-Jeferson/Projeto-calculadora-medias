const form = document.getElementById("verificar")
let fotoAprovado = '<img src="./images/aprovado.png" alt="rosto feliz"></img>'
let fotoReprovado = '<img src="./images/reprovado.png" alt="rosto feliz"></img>'
let spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
let spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
let mediaMinima = Number(prompt('Digite a nota mínima:'))

let nomes = []
let linhas = ''
let somaNotas = 0
let contadorNotas = 0

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionarLinha()
    atualizaMedia()
})

function adicionarLinha() {
    let atividade = document.getElementById("nomeAtividade")
    let notaAtividade = Number(document.getElementById("nota").value)
    
    if (nomes.includes(atividade.value.replace(/\s+/g, ' ').trim().toLowerCase())) {
        alert('Atividade já cadastrada.');
        return;
    }

    let linha = '<tr>'
    linha += `<td>${atividade.value}</td>`
    linha += `<td>${notaAtividade}</td>`
    linha += `<td>${notaAtividade >= mediaMinima ? fotoAprovado : fotoReprovado }</td>`

    linhas += linha

    somaNotas += notaAtividade
    contadorNotas++

    nomes.push(atividade.value)
    
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas

    atividade.value = ''
    document.getElementById('nota').value = ''
}

function atualizaMedia() {
    let mediaFinal = (somaNotas / contadorNotas).toFixed(1)

    let final = '<tr>'
    final += `<td>Média final</td>`
    final += `<td>${mediaFinal}</td>`
    final += `<td>${mediaFinal >= mediaMinima ? spanAprovado : spanReprovado}</td>`;
    final += '</tr>';

    const corpoMedia = document.querySelector('tfoot')
    corpoMedia.innerHTML = final
}