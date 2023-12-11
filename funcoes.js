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

function exibirListaDeMonstros(monstros) { // Função para exibir a lista de monstros e permitir que o usuário escolha um
  while (true) { // permite o usuário escolher novamente caso a opção seja inválida
    // Itera sobre os monstros exibido-os com indices
    monstros.forEach((monstro, index) => {
      console.log(`${[index + 1]} - ${monstro.nome}`);
    });

    const opcaoEscolhida = entradaDados.question("\nEscolha uma opção: ");

    // verifica se a opção escolhida é válida
    if (opcaoEscolhida >= 1 && opcaoEscolhida <= 5) {
      return opcaoEscolhida - 1; // Subtrai 1 para obter o indice correto
    } else {
      console.log("\nOpção Inválida! Escolha a opção correta!\n");
    }
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

  console.log(`\n*******************`);
  console.log(`Monstro: ${monstroEscolhido.nome.toUpperCase()}`);
  console.log(`Ataque: ${monstroEscolhido.ataque}`);
  console.log(`Defesa: ${personagem.defesa}`);
  console.log(`Vida: ${monstroEscolhido.vida}`);
  console.log(`*******************`);
}

function rolagemDoDado(nivel) { //Função para simular o lançamento de um dado e determinar o resultado da rolagem
  const rolarDado = Math.floor(Math.random() * 6) + 1; // Simula o rolamento de um dado de 6 lados

  // Simula a rolagem do dado com base no nível
  if (nivel === 1) {
    if (rolarDado === 1) {
      return 'acerto critico';
    } else if (rolarDado <= 3) {
      return 'acerto';
    } else {
      return 'erro';
    }
  } else if (nivel === 2) {
    if (rolarDado === 1) {
      return 'acerto critico';
    } else if (rolarDado <= 4) {
      return 'acerto';
    } else {
      return 'erro';
    }
  } else if (nivel === 3) {
    if (rolarDado === 1) {
      return 'acerto critico';
    } else if (rolarDado <= 5) {
      return 'acerto';
    } else {
      return 'erro';
    }
  } else if (nivel === 4) {
    if (rolarDado <= 2) {
      return 'acerto critico';
    } else if (rolarDado <= 5) {
      return 'acerto';
    } else {
      return 'erro';
    }
  } else if (nivel === 5) {
    if (rolarDado === 1) {
      return 'acerto critico';
    } else if (rolarDado === 2) {
      return 'acerto';
    } else {
      return 'erro';
    }
  }
}

function realizarAtaque(atacante, defensor) { // Função para realizar um ataque entre um atacante e um defensor

  const resultadoRolagem = rolagemDoDado(atacante.nivel); // Código para simular a rolagem do dado com base no nível

  let dano;

  // define o dano de ataque conforme o resultado da rolagem do dado
  if (resultadoRolagem === 'acerto') {
    dano = (atacante.ataque + 1) - defensor.defesa
  } else if (resultadoRolagem === 'acerto critico') {
    dano = (atacante.ataque + 3) - defensor.defesa
  } else {
    dano = 0
  }

  if (dano > 0) {
    defensor.vida = defensor.vida - dano // Reduz a vida do defensor pelo valor do dano
  } else {
    defensor.vida = defensor.vida - 0 // Caso o dano seja zero ou negativo, não reduz a vida do defensor
  }

  const mensagem = resultadoRolagem === 'acerto critico' // mensagem conforme o resultado da rolagem do dado
    ? `causou ${dano} de dano critico!`
    : resultadoRolagem === 'erro'
      ? 'errou o ataque!'
      : `causou ${dano} de dano!`

  console.log("-----------------------------------------------------");
  console.log(`O ${atacante.nome} atacou o ${defensor.nome} e ${mensagem}`);
  console.log("-----------------------------------------------------");
}


function usarPocaoDeCura(personagem) { //Função para usar uma poção de curo no personagem
  if (personagem.pocaoCura > 0) {
    personagem.vida += 20;
    personagem.pocaoCura--;
    console.log("\n-------------------------------------------------------");
    console.log(`O ${personagem.nome} bebeu uma poção de cura e recuperou 20 de vida.`);
    console.log("-------------------------------------------------------");
  } else {
    console.log("\n---------------------------------");
    console.log(`O ${personagem.nome} está sem poções de cura!`);
    console.log("---------------------------------");
  }
}

function verificarVitoriaOuDerrota(personagem, monstroEscolhido) { // Função para verificar se o personagem venceu ou perdeu o combate
  if (personagem.vida <= 0) {
    console.log('-----------------------------------------------');
    console.log(`Você foi derrotado pelo ${monstroEscolhido.nome}. GAME OVER!!`);
    console.log('-----------------------------------------------');
  } else {
    console.log('------------------------------------');
    console.log(`Você derrotou o ${monstroEscolhido.nome}. PARÁBENS!!`);
    console.log('------------------------------------');
  }
}

export {
  exibirAsciiArt,
  exibirInfosArena,
  exibirListaDeMonstros,
  realizarAtaque,
  usarPocaoDeCura,
  verificarVitoriaOuDerrota
};