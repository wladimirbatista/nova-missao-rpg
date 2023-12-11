import entradaDados from "readline-sync";
import { monstros, personagem } from "./dados.js";
import {
  exibirAsciiArt,
  exibirInfosArena,
  exibirListaDeMonstros,
  realizarAtaque,
  usarPocaoDeCura,
  verificarVitoriaOuDerrota,
} from "./funcoes.js";

function iniciarRPG() { // Função que inicia o jogo de RPG
  let monstroEscolhidoIndex;
  let monstroEscolhido;
  let escolha;
  let turno = 1;

  console.log("\n----------------------BEM VINDO AO RPG DE TEXTO----------------------\n");

  exibirAsciiArt(); // Consumindo função que exibe uma arte ASCII

  console.log("\nNesta aventura, enfrente um monstro que está assolando o reino!");
  console.log("\nVença essa batalha épica e torne-se um verdadeiro Herói!");

  do { // Loop para escolher um monstro
    console.log("\nQual monstro você deseja enfrentar? \n");
  
    monstroEscolhidoIndex = exibirListaDeMonstros(monstros);
  
    monstroEscolhido = monstros[monstroEscolhidoIndex];
  
    escolha = entradaDados.question("\nVocê tem certeza da sua escolha (S ou N)? ");

    if (escolha === "N" || escolha === "n") {
      console.log("\nJá que não tem certeza, escolha outro monstro!");
    } else if (!(escolha === "S" || escolha === "s")) {
      console.log("Escolha uma opção válida (S ou N):");
    }

  } while (escolha === 'N' || escolha === 'n')
  
  // Exibe o inicio da batalha 
  console.log("\n----------------ARENA---------------");
  console.log(`\nO ${personagem.nome} entrou na arena!`);
  console.log(`\nO ${monstroEscolhido.nome} entrou na arena!`);
  console.log(`\nA BATALHA VAI COMEÇAR!`);

  
  
  while (personagem.vida > 0 && monstroEscolhido.vida > 0) { // Loop principal da batalha

    exibirInfosArena(personagem, monstroEscolhido); // Consumindo função que exibe as informações do personagem e do monstro

    // Exibe o turno atual
    console.log(`\n----------${turno++}° TURNO---------`);
    console.log("Qual a sua proxima ação?");
    console.log("\n1 - Atacar");
    console.log("2 - Curar");

    const opcao = entradaDados.question("\nEscolha uma opção: "); // escolha do usuário

    // Executando ações conforme a escolha do usuário
    if (opcao == 1) {
      realizarAtaque(personagem, monstroEscolhido);
      realizarAtaque(monstroEscolhido, personagem);
    } else if (opcao == 2) {
      usarPocaoDeCura(personagem);
      realizarAtaque(monstroEscolhido, personagem);
    } else {
      console.log("\nOpção inválida. Por favor, escolha novamente!");
    }
  }

  verificarVitoriaOuDerrota(personagem, monstroEscolhido); // Consumindo função que verifica o resultado da batalha
}

iniciarRPG(); // Iniciando o jogo