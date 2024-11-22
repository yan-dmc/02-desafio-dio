const value = document.querySelector("#value");
const input = document.querySelector("#rank-scroll");
let saidaXP = document.querySelector("#hero-level");

value.textContent = input.value;
input.addEventListener("input", (event) => {
  valor = event.target.value;
  value.textContent = valor;

  let rank, cor;
  if (0 <= valor && valor < 1000){
    rank = "Ferro";
    cor = '#B09F9B';
  } else if (1000 <= valor && valor < 2000) {
    rank = "Bronze";
    cor = '#D08469';
  } else if (2000 <= valor && valor < 3000) {
    rank = "Prata";
    cor = '#C4D0E8';
  } else if (3000 <= valor && valor < 4000) {
    rank = "Ouro";
    cor = '#FEEBBD';
  } else if (4000 <= valor && valor < 5000) {
    rank = "Platina";
    cor = '#9FF2F7';
  } else if (5000 <= valor && valor < 6000) {
    rank = "Esmeralda";
    cor = '#64E8AB';
  } else if (6000 <= valor && valor < 7000) {
    rank = "Diamante";
    cor = '#6DA6DF';
  } else if (7000 <= valor && valor < 8000) {
    rank = "Ascendente";
    cor = '#ED4EF8';
  } else if (8000 <= valor && valor < 9000) {
    rank = "Imortal";
    cor = '#FFA752';
  } else if (9000 <= valor && valor <= 10000) {
    rank = "Radiante";
    cor = '#DFFFFF';
  }

  saidaXP.textContent = rank;
  saidaXP.style.color = cor;
});

function atualizarHeroi() {
    // Recebe o nome e o nível do herói
    let nome = prompt("Digite o nome do herói:");
    // Atualiza os elementos HTML com os valores inseridos
    document.getElementById("hero-name").textContent = nome;
    // document.getElementById("hero-level").textContent = nivel;
}

let entradaNome = document.querySelector("#hero-name");
let saidaNome = document.querySelector(".hero-nametag");

entradaNome.addEventListener("input", () => {
    saidaNome.innerText = entradaNome.value;
});

