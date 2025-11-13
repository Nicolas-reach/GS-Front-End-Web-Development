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

// Dados dos perfis 
const perfis = {
  "Ana Silva": {
    foto: "",
    cargo: "Desenvolvedora Front-End",
    formacao: "Sistemas de Informação - USP",
    experiencia: ["Front-end Developer na WebCorp (2019-2022)", "Estagiária na StartX (2017-2019)"],
    habilidades: ["HTML", "CSS", "JavaScript", "Acessibilidade"],
    soft: ["Comunicação", "Criatividade", "Trabalho em Equipe"],
    hobbies: ["Leitura", "Pintura"]
  },
  "Bruno Costa": {
    foto: "",
    cargo: "UX Designer",
    formacao: "Design Digital - Fiap",
    experiencia: ["UX Lead na DesignNow (2020-Presente)"],
    habilidades: ["Figma", "Prototipagem", "User Research"],
    soft: ["Empatia", "Escuta ativa"],
    hobbies: ["Fotografia"]
  },
  "Carla Souza": {
    foto: "",
    cargo: "Analista de Dados",
    formacao: "Ciência da Computação - Fiap",
    experiencia: ["Analista de Dados na DataCorp (2018-Presente)"],
    habilidades: ["Python", "SQL", "Power BI"],
    soft: ["Análise crítica", "Organização"],
    hobbies: ["Corrida"]
  },
  "Diego Ramos": {
    foto: "",
    cargo: "Desenvolvedor Back-End",
    formacao: "Engenharia de Software - Fiap",
    experiencia: ["Back-End Developer na APIworks (2017-Presente)"],
    habilidades: ["Java", "Spring Boot", "APIs"],
    soft: ["Resiliência", "Liderança técnica"],
    hobbies: ["Games"]
  },
  "Eduarda Lima": {
    foto: "",
    cargo: "Gestora de Projetos",
    formacao: "Administração - Fiap",
    experiencia: ["PM na AgileTeams (2016-Presente)"],
    habilidades: ["Scrum", "Kanban", "Roadmapping"],
    soft: ["Planejamento", "Comunicação"],
    hobbies: ["Viagens"]
  },
  "Felipe Alves": {
    foto: "",
    cargo: "DevOps Engineer",
    formacao: "Engenharia da Computação - Fiap",
    experiencia: ["DevOps na CloudCorp (2019-Presente)"],
    habilidades: ["Docker", "CI/CD", "AWS"],
    soft: ["Automação", "Colaboração"],
    hobbies: ["Automodelismo"]
  },
  "Gabriela Torres": {
    foto: "",
    cargo: "Especialista em IA",
    formacao: "IA Aplicada - Insper",
    experiencia: ["Pesquisadora em IA (2020-Presente)"],
    habilidades: ["Python", "TensorFlow", "ML"],
    soft: ["Curiosidade", "Raciocínio lógico"],
    hobbies: ["Xadrez"]
  },
  "Henrique Rocha": {
    foto: "",
    cargo: "Analista de Segurança",
    formacao: "Segurança da Informação - Fiap",
    experiencia: ["Security Analyst na SecureNet (2018-Presente)"],
    habilidades: ["Firewalls", "PenTest"],
    soft: ["Detalhismo", "Ética"],
    hobbies: ["Ciclismo"]
  },
  "Isabela Martins": {
    foto: "",
    cargo: "Arquiteta de Software",
    formacao: "Ciência da Computação - Fiap",
    experiencia: ["Solution Architect (2019-Presente)"],
    habilidades: ["Arquitetura", "Kubernetes", "Design de Sistemas"],
    soft: ["Visão sistêmica", "Liderança"],
    hobbies: ["Jardinagem"]
  },
  "João Pereira": {
    foto: "",
    cargo: "Engenheiro de Dados",
    formacao: "Engenharia de Computação - Fiap",
    experiencia: ["Data Engineer na BigDataCo (2017-Presente)"],
    habilidades: ["Spark", "SQL", "ETL"],
    soft: ["Persistência", "Trabalho em equipe"],
    hobbies: ["Futebol"]
  }
};

// Renderiza os cards
function renderCards() {
  const container = document.getElementById('profiles-container');
  container.innerHTML = ''; // limpa antes
  Object.keys(perfis).forEach(name => {
    const p = perfis[name];
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${p.foto}" alt="${name}">
      <div class="card-body">
        <h3>${name}</h3>
        <p>${p.cargo}</p>
      </div>
    `;
    // evento de clique
    card.addEventListener('click', () => abrirPerfil(name));
    container.appendChild(card);
  });
}

// Modal
function abrirPerfil(name) {
  const modal = document.getElementById('modal');
  const detalhes = document.getElementById('perfil-detalhes');
  const p = perfis[name];
  if (!p) return;
  detalhes.innerHTML = `
    <h2>${name}</h2>
    <p><strong>Cargo:</strong> ${p.cargo}</p>
    <p><strong>Formação:</strong> ${p.formacao}</p>
    <p><strong>Experiência:</strong></p>
    <ul>${p.experiencia.map(e => `<li>${e}</li>`).join('')}</ul>
    <p><strong>Habilidades:</strong> ${p.habilidades.join(', ')}</p>
    <p><strong>Soft Skills:</strong> ${p.soft.join ? p.soft.join(', ') : p.soft}</p>
    <p><strong>Hobbies:</strong> ${p.hobbies}</p>
    <div style="text-align:center; margin-top:12px;">
      <button class="acao recomendar">Recomendar Profissional</button>
      <button class="acao mensagem">Enviar Mensagem</button>
    </div>
  `;
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden','false');
}

function fecharPerfil() {
  const modal = document.getElementById('modal');
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden','true');
}

// fecha clicando no X e fora do modal
document.addEventListener('DOMContentLoaded', () => {
  renderCards();
  document.getElementById('modal-close').addEventListener('click', fecharPerfil);
  document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target.id === 'modal') fecharPerfil();
  });
});