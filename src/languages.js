export const pt = {
  "tutorial": "Use as setas para navegar e X para atirar",
  "title": "Project Galaxy",
  "subtitle": "Aperte Espaco para comecar"
}

export const en = {
  "tutorial": "Use directional keys to navigate and X to shoot",
  "title": "Project Galaxy",
  "subtitle": "Press Space to start"
}

export async function loadLanguage(browserLanguage) {
  if (browserLanguage === "pt-BR") {
    return pt;
  }
  return en;
}

export default loadLanguage