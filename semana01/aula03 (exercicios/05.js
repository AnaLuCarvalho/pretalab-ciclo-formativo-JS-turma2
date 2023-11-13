const alunaAcademia = {
    nome: "Juliana",
    nomeDoMeio: "Costa",
    sobrenome: "Silva",
    email: "julicacosta@gmail.com",
    emailDaAcademia: "almaecorpo@fit.com",
    idade: 30,
    peso: 65.5,
    altura: 1.62,
    fumante: false,
    bebe: true,
    tempoPraticaAtividadeFisica: 2,
}
const nomeCompleto = `${alunaAcademia.nome} ${alunaAcademia.nomeDoMeio} ${alunaAcademia.sobrenome}`

console.log(nomeCompleto)
console.log(nomeCompleto.length)

let emailAluna = alunaAcademia.emailDaAcademia
console.log(emailAluna)

let nomeUsuario = emailAluna.split('@, 1')
console.log(nomeUsuario)