console.log("script carregou!");

const botaoTema = document.getElementById("toggle-tema");
const body = document.body;

const logo = document.getElementById("logo");
const iconeTema = document.getElementById("icone-tema");
const favicon = document.getElementById("favicon");

console.log("botaoTema:", botaoTema);

const assets = {
  light: {
    logo: "img/logo-tecboard-preto.png",
    icone: "img/botao-modo-noturno.png",
    favicon: "favicon-tecboard-preto.svg"
  },
  dark: {
    logo: "img/logo-tecboard-branco.png",
    icone: "img/botao-modo-diurno.png",
    favicon: "favicon-tecboard-roxo.svg"
  }
};

function aplicarTema(tema) {
  const darkAtivo = tema === "dark";
  body.classList.toggle("dark", darkAtivo);

  logo.src = assets[tema].logo;
  iconeTema.src = assets[tema].icone;
  favicon.href = assets[tema].favicon;
}

function alternarTema() {
  const temaAtual = body.classList.contains("dark") ? "dark" : "light";
  const proximoTema = temaAtual === "dark" ? "light" : "dark";

  aplicarTema(proximoTema);
  localStorage.setItem("tema", proximoTema);
}

botaoTema.addEventListener("click", alternarTema);

const temaSalvo = localStorage.getItem("tema");
if (temaSalvo === "dark" || temaSalvo === "light") {
  aplicarTema(temaSalvo);
}
