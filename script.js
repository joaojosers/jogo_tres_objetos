function jogar() {
    const idade = parseInt(prompt("Qual é a sua idade?"));
    let venceu = false;
  
    if (isNaN(idade)) {
      alert("Digite uma idade válida!");
      return;
    }
  
    if (idade < 18) {
      alert("Você não pode jogar.");
      return;
    }
  
    let escolhaJogador = parseInt(prompt("Digite 1-Pedra, 2-Papel ou 3-Tesoura"));
  
    if (![1, 2, 3].includes(escolhaJogador)) {
      alert("Escolha inválida! Use apenas 1, 2 ou 3.");
      return;
    }
  
    let escolhaComputador = Math.floor(Math.random() * 3) + 1;
  
    if (escolhaJogador === escolhaComputador) {
      alert("Empate! Ambos escolheram: " + escolhaComputador);
    } else if (
      (escolhaJogador === 1 && escolhaComputador === 3) ||
      (escolhaJogador === 2 && escolhaComputador === 1) ||
      (escolhaJogador === 3 && escolhaComputador === 2)
    ) {
      venceu = true;
      alert("Você venceu! Computador escolheu: " + escolhaComputador);
    } else {
      alert("Computador venceu! Ele escolheu: " + escolhaComputador);
    }
  
    console.log("Venceu?", venceu);
  }
  