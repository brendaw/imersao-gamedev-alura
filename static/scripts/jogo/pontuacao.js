class Pontuacao {
  constructor() {
    this.pontos = 0;
  }
  
  exibe() {
    textAlign(RIGHT);
    fill('#fff');
    textSize(50);
    text(parseInt(this.pontos), width - 30, 50);
  }
  
  adicionaPontos() {
    this.pontos = this.pontos + 0.2;
  }
}