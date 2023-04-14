let perguntas = [
  {
    pergunta: "O que é bullying?",
    opcoes: [
      {
        opcao:
          "A prática de atos agressivos repetidos, intencionais e sistematizados contra uma pessoa.",
        correta: true,
      },
      {
        opcao: "Um elogio a alguém.",
        correta: false,
      },
      {
        opcao: "Um tipo de piada.",
        correta: false,
      },
    ],
    explicacao:
      "Resposta incorreta. Bullying é a prática de atos agressivos repetidos, intencionais e sistematizados contra uma pessoa.",
  },
  {
    pergunta:
      "Quais são as consequências do bullying para a saúde mental da vítima?",
    opcoes: [
      {
        opcao: "Aumento da autoconfiança",
        correta: false,
      },
      {
        opcao: "Baixa autoestima e depressão",
        correta: true,
      },
      {
        opcao: "Maior capacidade de lidar com situações difíceis",
        correta: false,
      },
    ],
    explicacao:
      "Resposta incorreta. As consequências do bullying para a saúde mental da vítima incluem baixa autoestima e depressão.",
  },
  {
    pergunta: "Qual é a importância de denunciar casos de bullying?",
    opcoes: [
      {
        opcao: "Prevenir futuros casos",
        correta: true,
      },
      {
        opcao: "Causar mais conflitos",
        correta: false,
      },
      {
        opcao: "Aumentar a popularidade da vítima",
        correta: false,
      },
    ],
    explicacao:
      "Resposta incorreta. A importância de denunciar casos de bullying é prevenir futuros casos.",
  },
  {
    pergunta:
      "O que pode ser feito para ajudar uma pessoa que está sofrendo bullying?",
    opcoes: [
      {
        opcao: "Ignorar a situação",
        correta: false,
      },
      {
        opcao: "Rir junto com o agressor",
        correta: false,
      },
      {
        opcao: "Ouvir e apoiar a pessoa",
        correta: true,
      },
    ],
    explicacao:
      "Resposta incorreta. O que pode ser feito para ajudar uma pessoa que está sofrendo bullying é ouvir e apoiar a pessoa.",
  },
  {
    pergunta: "Quais são as principais formas de bullying?",
    opcoes: [
      {
        opcao: "Tecnológico e financeiro",
        correta: false,
      },
      {
        opcao: "Verbal, físico e psicológico",
        correta: true,
      },
      {
        opcao: "Artístico e esportivo",
        correta: false,
      },
    ],
    explicacao:
      "Resposta incorreta. As principais formas de bullying são verbal, físico e psicológico.",
  },
  {
    pergunta:
      "Por que é importante ensinar valores como empatia e respeito desde a infância?",
    opcoes: [
      {
        opcao: "Para estimular a competitividade",
        correta: false,
      },
      {
        opcao: "Para fortalecer a intolerância",
        correta: false,
      },
      {
        opcao: "Para prevenir comportamentos agressivos",
        correta: true,
      },
    ],
    explicacao:
      "Resposta incorreta. É importante ensinar valores como empatia e respeito desde a infância para prevenir comportamentos agressivos e promover um ambiente de convivência saudável e respeitoso.",
  },
];

const perguntaAtual = 0;

function comecarQuiz() {
  const quizDiv = document.getElementById("quiz");
  quizDiv.style.display = "block";
  exibirPergunta(perguntaAtual);
}

function exibirPergunta(indicePergunta) {
  const pergunta = perguntas[indicePergunta];
  const divPergunta = document.getElementById("pergunta");
  divPergunta.innerHTML = "";

  // criar contêiner para título e texto da pergunta
  const containerPergunta = document.createElement("div");
  containerPergunta.classList.add("container-pergunta");

  // criar título da pergunta
  const tituloPergunta = document.createElement("h2");
  tituloPergunta.textContent = `Pergunta ${indicePergunta + 1}:`;
  containerPergunta.appendChild(tituloPergunta);

  // criar texto da pergunta
  const textoPergunta = document.createElement("p");
  textoPergunta.classList.add("quiz-text");
  textoPergunta.textContent = pergunta.pergunta;
  containerPergunta.appendChild(textoPergunta);

  divPergunta.appendChild(containerPergunta);

  // criar lista de opções
  const listaOpcoes = document.createElement("ul");
  listaOpcoes.classList.add("quiz-options");
  for (let i = 0; i < pergunta.opcoes.length; i++) {
    const opcao = pergunta.opcoes[i];
    const itemLista = document.createElement("li");
    itemLista.classList.add("quiz-option-label");

    // criar input de opção
    const radioOpcao = document.createElement("input");
    radioOpcao.classList.add("quiz-input");
    radioOpcao.type = "radio";
    radioOpcao.name = `q${indicePergunta}`;
    radioOpcao.value = i;
    itemLista.appendChild(radioOpcao);

    // criar label da opção
    const labelOpcao = document.createElement("label");
    labelOpcao.classList.add("quiz-option-text");
    labelOpcao.textContent = opcao.opcao;
    itemLista.appendChild(labelOpcao);

    listaOpcoes.appendChild(itemLista);
  }

  divPergunta.appendChild(listaOpcoes);

  // criar botão de resposta
  const botaoResponder = document.createElement("button");
  botaoResponder.textContent = "RESPONDER";
  botaoResponder.classList.add("botao-responder"); // adiciona a classe "botao-responder"
  botaoResponder.onclick = () => {
    verificarResposta(indicePergunta);
  };
  divPergunta.appendChild(botaoResponder);

  // criar explicação da resposta
  const divError = document.createElement("div");
  divError.classList.add("container-error");

  const explicacao = document.createElement("p");
  explicacao.classList.add("mensagem-erro");
  explicacao.id = `explicacao${indicePergunta}`;
  explicacao.style.display = "none";
  explicacao.innerText = pergunta.explicacao;
  divError.appendChild(explicacao);
  divPergunta.appendChild(divError);
}

function verificarResposta(indicePergunta) {
  let resposta = document.querySelector(
    `input[name="q${indicePergunta}"]:checked`
  );
  if (resposta == null) {
    alert("Por favor, selecione uma resposta.");
    return;
  }

  if (perguntas[indicePergunta].opcoes[resposta.value].correta === true) {
    alert("Resposta correta!");
    proximaPergunta(indicePergunta);
  } else {
    document.getElementById(`explicacao${indicePergunta}`).style.display =
      "block";
    setTimeout(() => {
      document.getElementById(`explicacao${indicePergunta}`).style.display =
        "none";
      proximaPergunta(indicePergunta);
    }, 8000);
  }
}

function proximaPergunta(indicePergunta) {
  let proximaNumPergunta = indicePergunta + 1;
  if (proximaNumPergunta < perguntas.length) {
    exibirPergunta(proximaNumPergunta);
  } else {
    alert("Parabéns, você terminou o quiz!");
    document.getElementById("quiz").style.display = "none";
  }
}

function mostrarPergunta(indicePergunta) {
  document.getElementById("pergunta").textContent =
    perguntas[indicePergunta - 1].pergunta;
  let opcoes = document.getElementsByName(`q${indicePergunta}`);
  for (let i = 0; i < opcoes.length; i++) {
    opcoes[i].value = perguntas[indicePergunta - 1].opcoes[i].opcao;
    opcoes[i].nextSibling.textContent =
      perguntas[indicePergunta - 1].opcoes[i].opcao;
  }
}
mostrarPergunta(1);
