# Drag Game

Projeto de jogo 2D de arrancada usando Phaser.js.
Os carros agora são montados a partir de imagens SVG do corpo e das rodas,
o que deixa o visual mais parecido com carros reais sem depender de fotos.
As rodas continuam girando conforme a velocidade.

## Desenvolvimento

1. Certifique-se de ter o **Node.js** instalado.
2. Para instalar as dependências, rode `npm install` (pode ser necessário acesso à internet).
3. Abra o arquivo `index.html` em um navegador para iniciar o jogo.

## Estrutura

- `index.html` carrega o Phaser via CDN e o script principal.
- `scripts/` contém o código fonte do jogo.
  - `index.js` inicializa o Phaser e registra as cenas.
  - `scenes/` possui as cenas `Preload`, `Menu`, `Race` e `End`.

Este projeto é um ponto de partida simples para evoluir o jogo de corrida.
