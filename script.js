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
    pergunta: "Qual é o resultado da equação 2 + 2?",
    opcoes: [
      {
        opcao: "4",
        correta: true,
      },
      {
        opcao: "3",
        correta: false,
      },
      {
        opcao: "5",
        correta: false,
      },
    ],
    explicacao: "Resposta incorreta. 2 + 2 é igual a 4.",
  },
];

let perguntaAtual = 0;

function comecarQuiz() {
  document.getElementById("quiz").style.display = "block";
  exibirPergunta(perguntaAtual);
}

function exibirPergunta(numPergunta) {
  let pergunta = perguntas[numPergunta];
  let divPergunta = document.getElementById("pergunta");
  divPergunta.innerHTML = "";

  let tituloPergunta = document.createElement("h2");
  tituloPergunta.innerText = `Pergunta ${numPergunta + 1}:`;
  divPergunta.appendChild(tituloPergunta);

  let textoPergunta = document.createElement("p");
  textoPergunta.innerText = pergunta.pergunta;
  divPergunta.appendChild(textoPergunta);

  let listaOpcoes = document.createElement("ul");
  for (let i = 0; i < pergunta.opcoes.length; i++) {
    let opcao = pergunta.opcoes[i];
    let itemLista = document.createElement("li");
    let radioOpcao = document.createElement("input");
    radioOpcao.type = "radio";
    radioOpcao.name = `q${numPergunta}`;
    radioOpcao.value = i;
    itemLista.appendChild(radioOpcao);
    let textoOpcao = document.createTextNode(opcao.opcao);
    itemLista.appendChild(textoOpcao);
    listaOpcoes.appendChild(itemLista);
  }
  divPergunta.appendChild(listaOpcoes);

  let botaoResponder = document.createElement("button");
  botaoResponder.innerText = "Responder";
  botaoResponder.onclick = () => {
    verificarResposta(numPergunta);
  };
  divPergunta.appendChild(botaoResponder);

  let explicacao = document.createElement("p");
  explicacao.id = `explicacao${numPergunta}`;
  explicacao.style.display = "none";
  explicacao.innerText = pergunta.explicacao;
  divPergunta.appendChild(explicacao);
}

function verificarResposta(numPergunta) {
  let resposta = document.querySelector(
    `input[name="q${numPergunta}"]:checked`
  );
  if (resposta == null) {
    alert("Por favor, selecione uma resposta.");
    return;
  }

  if (perguntas[numPergunta].opcoes[resposta.value].correta === true) {
    alert("Resposta correta!");
    proximaPergunta(numPergunta);
  } else {
    document.getElementById(`explicacao${numPergunta}`).style.display = "block";
    setTimeout(() => {
      document.getElementById(`explicacao${numPergunta}`).style.display =
        "none";
      proximaPergunta(numPergunta);
    }, 2000);
  }
}

function proximaPergunta(numPergunta) {
  let proximaNumPergunta = numPergunta + 1;
  if (proximaNumPergunta < perguntas.length) {
    exibirPergunta(proximaNumPergunta);
  } else {
    alert("Parabéns, você terminou o quiz!");
    document.getElementById("quiz").style.display = "none";
  }
}

function mostrarPergunta(numPergunta) {
  document.getElementById("pergunta").textContent =
    perguntas[numPergunta - 1].pergunta;
  let opcoes = document.getElementsByName(`q${numPergunta}`);
  for (let i = 0; i < opcoes.length; i++) {
    opcoes[i].value = perguntas[numPergunta - 1].opcoes[i].opcao;
    opcoes[i].nextSibling.textContent =
      perguntas[numPergunta - 1].opcoes[i].opcao;
  }
  document.getElementById(`explicacao`).style.display = "none";
}
mostrarPergunta(1);
