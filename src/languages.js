export const pt = {
  "tutorial": "Use as setas para navegar e X para atirar",
  "tutorialDodge": "Pressione Z para desviar",
  "title": "Project Galaxy",
  "subtitle": "Aperte Espaco para comecar",
  "nameInput": "Seu nome: ",
  "personalBest": "Melhor pontuacao: ",
  "battleReport": {
    "title": "FIM DA BATALHA",
    "asteroids": "Asteroides destruidos: "
  }
}

export const en = {
  "tutorial": "Use directional keys to navigate and X to shoot",
  "tutorialDodge": "Press Z to dodge attacks",
  "title": "Project Galaxy",
  "subtitle": "Press Space to start",
  "nameInput": "Your name: ",
  "personalBest": "Personal Best: ",
  "battleReport": {
    "title": "BATTLE REPORT",
    "asteroids": "Asteroids destroyed: "
  }
}

export async function loadLanguage(browserLanguage) {
  if (browserLanguage === "pt-BR") {
    return pt;
  }
  return en;
}

export default loadLanguage