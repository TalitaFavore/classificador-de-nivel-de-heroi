let nomeHeroi = "Talita"
let XP = 5520
let nivel = ""

if (XP <= 1000) {
    nivel = "Ferro"
} else if (XP > 1000 && XP <= 2000) {
    nivel = "Bronze"
} else if (XP > 2000 && XP <= 5000) {
    nivel = "Prata"
} else if (XP > 5000 && XP <= 7000) {
    nivel = "Ouro"
} else if (XP > 7000 && XP <= 8000) {
    nivel = "Platina"
} else if (XP > 8000 && XP <= 9000) {
    nivel = "Ascendente"
} else if (XP > 9000 && XP <= 10000) {
    nivel = "Imortal"
} else if (XP > 10000) {
    nivel = "Radiante"
} else {
    console.log("XP inválido")
}

console.log("O Herói " + nomeHeroi +" tem " + XP + " pontos de experiência e está no nível de " + nivel)
