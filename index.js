import entradaDados from "readline-sync";
import { monstros, personagem } from "./dados.js";
import {
  exibirAsciiArt,
  exibirInfosArena,
  exibirListaDeMonstros,
  exibirMensagemAtaque,
  realizarAtaque,
  usarPocaoDeCura,
  verificarVitoriaOuDerrota,
} from "./funcoes.js";

function iniciarRPG() { // Função que inicia o jogo de RPG
  let monstroEscolhidoIndex;
  let monstroEscolhido;
  let turno = 1;

  console.log("\n----------------------BEM VINDO AO RPG DE TEXTO----------------------\n");

  exibirAsciiArt(); // Consumindo função que exibe uma arte ASCII

  console.log("\nNesta aventura, enfrente um monstro que está assolando o reino!");
  console.log("\nVença essa batalha épica e torne-se um verdadeiro Herói!");

  while (true){ // Loop para escolher um monstro
    console.log("\nQual monstro você deseja enfrentar? \n")
    monstroEscolhidoIndex = exibirListaDeMonstros(monstros)
    monstroEscolhido = monstros[monstroEscolhidoIndex]
    break; // reinicia o loop
  }
  
  // Exibe o inicio da batalha 
  console.log("\n----------------ARENA---------------");
  console.log(`\nO ${personagem.nome} e o ${monstroEscolhido.nome} entraram na arena!`);
  console.log(`\nA BATALHA VAI COMEÇAR!`);
    
  while (personagem.vida > 0 && monstroEscolhido.vida > 0) { // Loop principal da batalha

    // Exibe o turno atual
    console.log(`\n-----${turno}° TURNO-----`);
    console.log("\nQual a sua ação?");
    console.log("\n1 - Atacar");
    console.log("2 - Curar");

    let opcao = entradaDados.question("\nEscolha uma opção: "); // escolha do usuário

    // Executando ações conforme a escolha do usuário
    if (opcao == 1) {
      const ataquePersonagem = realizarAtaque(personagem, monstroEscolhido);
      const ataqueMonstro = realizarAtaque(monstroEscolhido, personagem);
      exibirInfosArena(personagem, monstroEscolhido); // Consumindo função que exibe as informações do personagem e do monstro
      exibirMensagemAtaque(ataquePersonagem);
      exibirMensagemAtaque(ataqueMonstro);
      turno++;
    } else if (opcao == 2) {
      const ataqueMonstro = realizarAtaque(monstroEscolhido, personagem);
      usarPocaoDeCura(personagem, monstroEscolhido);
      exibirMensagemAtaque(ataqueMonstro)
      turno++;
    } else {
      console.log("\nOpção inválida. Escolha a opção correta!");
    }
  }

  verificarVitoriaOuDerrota(personagem, monstroEscolhido); // Consumindo função que verifica o resultado da batalha
}

iniciarRPG(); // Iniciando o jogo