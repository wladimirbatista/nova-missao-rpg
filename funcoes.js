import entradaDados from "readline-sync";

function exibirAsciiArt() { // Função para exibir uma arte ASCII no console
  let asciiArt = `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣀⣠⣼⠀⠀⠀⠀⠈⠙⡆⢤⠀⠀⠀⠀⠀⣷⣄⣀⣀⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣴⣾⣿⣿⣿⣿⣿⣿⡿⢿⡷⡆⠀⣵⣶⣿⣾⣷⣸⣄⠀⠀⠀⢰⠾⡿⢿⣿⣿⣿⣿⣿⣿⣷⣦⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣾⣿⣿⣿⣿⣽⣿⣿⣿⣿⡟⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣄⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⢀⡾⣻⣵⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠐⣻⣿⣿⡏⢹⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣮⣟⢷⡀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢿⣿⣿⣿⡄⠀⠀⠀⠀⢻⣿⣿⣷⡌⠸⣿⣾⢿⡧⠀⠀⠀⠀⠀⢀⣿⣿⣿⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⣠⣾⡿⢛⣵⣾⣿⣿⣿⣿⣿⣯⣾⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⢻⣿⣿⣿⣶⣌⠙⠋⠁⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣷⣽⣿⣿⣿⣿⣿⣷⣮⡙⢿⣿⣆⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⣰⡿⢋⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣿⣿⣿⣿⣧⡀⠀⠀⠀⣠⣽⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⢀⣼⣿⣿⣿⣿⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣝⢿⣇⠀⠀⠀⠀
  ⠀⠀⠀⣴⣯⣴⣿⣿⠿⢿⣿⣿⣿⣿⣿⣿⡿⢫⣾⣿⣿⣿⣿⣿⣿⡦⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⢴⣿⣿⣿⣿⣿⣿⣷⣝⢿⣿⣿⣿⣿⣿⣿⡿⠿⣿⣿⣧⣽⣦⠀⠀⠀
  ⠀⠀⣼⣿⣿⣿⠟⢁⣴⣿⡿⢿⣿⣿⡿⠛⣰⣿⠟⣻⣿⣿⣿⣿⣿⣿⣿⡿⠿⠋⢿⣿⣿⣿⣿⣿⠻⢿⣿⣿⣿⣿⣿⣿⣿⣟⠻⣿⣆⠙⢿⣿⣿⡿⢿⣿⣦⡈⠻⣿⣿⣿⣧⠀⠀
  ⠀⡼⣻⣿⡟⢁⣴⡿⠋⠁⢀⣼⣿⠟⠁⣰⣿⠁⢰⣿⣿⣿⡿⣿⣿⣿⠿⠀⣠⣤⣾⣿⣿⣿⣿⣿⠀⠀⠽⣿⣿⣿⢿⣿⣿⣿⡆⠈⢿⣆⠀⠻⣿⣧⡀⠈⠙⢿⣦⡈⠻⣿⣟⢧⠀
  ⠀⣱⣿⠋⢠⡾⠋⠀⢀⣠⡾⠟⠁⠀⢀⣿⠟⠀⢸⣿⠙⣿⠀⠈⢿⠏⠀⣾⣿⠛⣻⣿⣿⣿⣿⣯⣤⠀⠀⠹⡿⠁⠀⣿⠏⣿⡇⠀⠹⣿⡄⠀⠈⠻⢷⣄⡀⠀⠙⢷⣄⠙⣿⣎⠂
  ⢠⣿⠏⠀⣏⢀⣠⠴⠛⠉⠀⠀⠀⠀⠈⠁⠀⠀⠀⠛⠀⠈⠀⠀⠀⠀⠈⢿⣿⣼⣿⣿⣿⣿⢿⣿⣿⣶⠀⠀⠀⠀⠀⠁⠀⠛⠀⠀⠀⠀⠁⠀⠀⠀⠀⠉⠛⠦⣄⣀⣹⠀⠹⣿⡄
  ⣼⡟⠀⣼⣿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠛⠛⠛⠋⠁⠀⢹⣿⣿⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢿⣧⠀⢻⣷
  ⣿⠃⢰⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣰⣶⣦⣤⠀⠀⣿⡿⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⡆⠘⣿
  ⣿⠀⢸⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⡟⠁⠈⢻⣷⣸⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣧⠀⣿
  ⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣷⣀⣀⣸⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⣿
  ⢸⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠛⣿⡿⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡇
  ⠈⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⠁
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢷⣴⡿⣷⠀⠀⢰⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠴⡿⣟⣿⣿⣶⡶⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`;
  console.log(asciiArt);
}

function exibirListaDeMonstros(monstros) { // Função que exibe uma lista de monstros e permitir que o usuário escolha um
  
  while (true) { // permite o usuário escolher novamente caso a opção seja inválida
    // monstros.forEach((monstro, index) => { // exibe uma lista númerica de monstros
    //   console.log(`${[index + 1]} - ${monstro.nome}`);
    // });

    exibirMonstrosNumerados(monstros);

    const opcaoEscolhida = entradaDados.question("\nEscolha uma opção: ");

    // verifica se a opção escolhida é válida
    if (opcaoEscolhida >= 1 && opcaoEscolhida <= 5) {
      return opcaoEscolhida - 1; // Subtrai 1 para obter o indice correto
    } else {
      console.log("\nOpção Inválida! Escolha a opção correta!\n");
    }
  }
}

function exibirMonstrosNumerados(monstros) { // Função que percorre um array de monstros
  monstros.forEach((monstro, index) => { // 
    console.log(`${[index + 1]} - ${monstro.nome}`);
  });
}

function realizarAtaque(atacante, defensor) { // Função para realizar um ataque entre um atacante e um defensor
  const resultadoRolagemDado = rolagemDoDado(atacante.nivel);
  const dano = calcularDano(atacante, defensor, resultadoRolagemDado);
  // aplicarDano(defensor, dano);
  const mensagemAtaque = criarMensagemAtaque(atacante, defensor, resultadoRolagemDado, dano);
  return mensagemAtaque;
}

function calcularDano(atacante, defensor, resultadoRolagemDado) { // Função para calcular o dano de ataque
  let dano;

  if (resultadoRolagemDado === 'acerto') {
    dano = atacante.ataque - defensor.defesa;
  } else if (resultadoRolagemDado === 'acerto critico') {
    dano = (atacante.ataque + 6) - defensor.defesa;
  } else {
    dano = 0;
  }

  return dano > 0 ? defensor.vida -= dano : defensor.vida -= 0;
}

function criarMensagemAtaque(atacante, defensor, resultadoRolagemDado, dano) { // Função que criar uma mensagem conforme o resultado da rolagem do dado
  const mensagem = resultadoRolagemDado === 'acerto critico' // 
  ? `causou ${dano} de dano critico!`
  : resultadoRolagemDado === 'erro'
    ? 'errou o ataque!'
    : `causou ${dano} de dano!`

  // const mensagemAtaque = `O ${atacante.nome} atacou o ${defensor.nome} e ${mensagem}`;

  return `O ${atacante.nome} atacou o ${defensor.nome} e ${mensagem}`;
}

function rolagemDoDado(nivel) { //Função para simular o lançamento de um dado e determinar o resultado da rolagem
  const rolarDado = Math.floor(Math.random() * 6) + 1;

  if (nivel === 1 && rolarDado === 1) {
    return 'acerto critico';
  } else if (nivel === 2 && rolarDado <= 4) {
    return 'acerto';
  } else if (nivel === 3 && rolarDado <= 5) {
    return 'acerto';
  } else if (nivel === 4 && rolarDado <= 5) {
    return 'acerto';
  } else if (nivel === 5 && (rolarDado === 1 || rolarDado === 2)) {
    return 'acerto';
  } else {
    return 'erro';
  }
}

function exibirInfosArena(personagem, monstroEscolhido) { // Função para exibir informações sobre personagem e monstro na arena
  console.log(`\n******************`);
  console.log(`Personagem: ${personagem.nome.toUpperCase()}`);
  console.log(`Ataque: ${personagem.ataque}`);
  console.log(`Defesa: ${personagem.defesa}`);
  console.log(`Vida: ${personagem.vida}`);
  console.log(`Poção de Cura: ${personagem.pocaoCura}`);
  console.log(`******************`);

  console.log(`*******************`);
  console.log(`Monstro: ${monstroEscolhido.nome.toUpperCase()}`);
  console.log(`Ataque: ${monstroEscolhido.ataque}`);
  console.log(`Defesa: ${monstroEscolhido.defesa}`);
  console.log(`Vida: ${monstroEscolhido.vida}`);
  console.log(`*******************`);
}

function exibirMensagemAtaque(mensagem) {
  console.log("*****************************************************");
  console.log(mensagem);
  console.log("*****************************************************");
}

function usarPocaoDeCura(personagem, monstroEscolhido) { //Função para usar uma poção de curo no personagem
  if (personagem.pocaoCura > 0) {
    personagem.vida += 20;
    personagem.pocaoCura--;
    exibirInfosArena(personagem, monstroEscolhido);
    console.log("\n*******************************************************");
    console.log(`O ${personagem.nome} bebeu uma poção de cura e ganhou +20 de vida.`);
    console.log("*******************************************************");
  } else {
    exibirInfosArena(personagem, monstroEscolhido);
    console.log("\n********************************");
    console.log(`O ${personagem.nome} está sem poções de cura!`);
    console.log("*********************************");
  }
}

function verificarVitoriaOuDerrota(personagem, monstroEscolhido) { // Função para verificar se o personagem venceu ou perdeu o combate
  if (personagem.vida <= 0) {
    console.log('\n--------------DERROTA!!---------------');
    console.log(`O ${personagem.nome} foi derrotado pelo ${monstroEscolhido.nome}!`);
    console.log('--------------------------------------');
  } else {
    console.log('\n------------VITORIA!!----------');
    console.log(`O ${personagem.nome} venceu o ${monstroEscolhido.nome}.`);
    console.log('-------------------------------');
  }
}

export {
  exibirAsciiArt,
  exibirInfosArena,
  exibirMensagemAtaque,
  exibirListaDeMonstros,
  realizarAtaque,
  usarPocaoDeCura,
  verificarVitoriaOuDerrota
};