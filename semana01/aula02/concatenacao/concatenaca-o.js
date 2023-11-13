const nome = "Ana"
const sobrenome = "Carvalho"
const sentimento = " Hoje estou feliz, mas estou com muita fome." 
//Forma tradicional de concatenação
console.log("Olá, " + nome + " " + sobrenome + "!" + sentimento)

//Template String se utiliza a crase ao invés das aspas duplas 
console.log(`Olá, ${nome}`)
console.log(`Olá, ${nome} ${sobrenome}! ${sentimento}`)