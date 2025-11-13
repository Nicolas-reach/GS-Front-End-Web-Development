// Quiz 
const perguntas = [
  {
    pergunta: "Qual é a principal habilidade para o futuro do trabalho?",
    opcoes: ["Comunicação", "Trabalho solitário", "Falta de empatia"],
    correta: 0
  },
  {
    pergunta: "Qual tecnologia mais impacta o mercado atual?",
    opcoes: ["Blockchain", "Fax", "Disquete"],
    correta: 0
  },
  {
    pergunta: "O que significa trabalhar de forma híbrida?",
    opcoes: ["Somente remoto", "Parte presencial e parte remota", "Somente presencial"],
    correta: 1
  }
];

let indice = 0;
let pontuacao = 0;

const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const resultadoEl = document.getElementById("resultado");
const reiniciarBtn = document.getElementById("reiniciar-btn");

function carregarPergunta() {
  const atual = perguntas[indice];
  perguntaEl.textContent = atual.pergunta;
  opcoesEl.innerHTML = "";
  atual.opcoes.forEach((op, i) => {
    const botao = document.createElement("button");
    botao.textContent = op;
    botao.onclick = () => verificarResposta(i);
    opcoesEl.appendChild(botao);
  });
}

function verificarResposta(opcaoSelecionada) {
  if (opcaoSelecionada === perguntas[indice].correta) pontuacao++;
  indice++;
  if (indice < perguntas.length) {
    carregarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  perguntaEl.textContent = `Você acertou ${pontuacao} de ${perguntas.length} perguntas!`;
  opcoesEl.innerHTML = "";
  proximaBtn.classList.add("hidden");
  reiniciarBtn.classList.remove("hidden");
}

reiniciarBtn.onclick = () => {
  indice = 0;
  pontuacao = 0;
  resultadoEl.textContent = "";
  reiniciarBtn.classList.add("hidden");
  carregarPergunta();
};

// iniciar quiz
carregarPergunta();