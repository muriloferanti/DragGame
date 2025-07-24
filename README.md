# Drag Game

Projeto de jogo 2D de arrancada usando Phaser.js.
Agora os carros possuem um corpo com rodas que giram durante a corrida,
tornando a experiência mais animada mesmo sem imagens externas.

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
