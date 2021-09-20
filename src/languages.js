export const pt = {
  "tutorialMovement": "Use as setas para navegar",
  "tutorialShooting": "Mantenha pressionado X para atirar",
  "tutorialDodge": "Pressione Z para desviar",
  "title": "Project Galaxy",
  "subtitle": "Aperte Espaco para comecar",
  "nameInput": "Seu nome: ",
  "personalBest": "Melhor pontuacao: ",
  "playerSelect": "Seleção de nave",
  "battleReport": {
    "title": "FIM DA BATALHA",
    "asteroids": "Asteroides destruidos: "
  }
}

export const en = {
  "tutorialMovement": "Use directional keys to navigate",
  "tutorialShooting": "Hold down X to shoot",
  "tutorialDodge": "Press Z to dodge attacks",
  "title": "Project Galaxy",
  "subtitle": "Press Space to start",
  "nameInput": "Your name: ",
  "personalBest": "Personal Best: ",
  "playerSelect": "Select Starship",
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