import entradaDados from 'readline-sync';
import { monstros, personagem } from './dados.js';
import { realizarAtaque, usarPocaoDeCura } from './funcoes.js';

function iniciarRPG() {
  console.log('-----------RPG de Texto-----------');
  console.log('Seja bem-vindo a uma nova aventura!');

  personagem.nome = entradaDados.question('\nDigite o nome do seu personagem: ');

  console.log('\nQual monstro seu personagem irá enfrentar:')

  const monstroEscolhidoIndex = entradaDados.keyInSelect(monstros.map(monstro => monstro.nome), 'Escolha uma opção: ');

  const monstroEscolhido = monstros[monstroEscolhidoIndex];

  let turno = 1;

  console.log(`\nO personagem ${personagem.nome} escolheu enfrentar um ${monstroEscolhido.nome}!\n`);

  console.log(`A BATALHA COMEÇEOU!`)

  while (personagem.vida > 0 && monstroEscolhido.vida > 0) {
    console.log(`\n*****${personagem.nome}*****`);
    console.log(`Ataque: ${personagem.ataque}`);
    console.log(`Defesa: ${personagem.defesa}`);
    console.log(`Vida: ${personagem.vida}`);
    console.log(`Poção de Cura: ${personagem.pocaoCura}`)
    console.log(`***************`);

    console.log(`\n*****${monstroEscolhido.nome}*****`);
    console.log(`Ataque: ${monstroEscolhido.ataque}`);
    console.log(`Defesa: ${personagem.defesa}`);
    console.log(`Vida: ${monstroEscolhido.vida}`);
    console.log(`************************`);

    console.log('\n---------------------------------------------------');
    console.log(`${turno++}° turno - Escolha a ação do seu personagem!`);

    const opcao = entradaDados.keyInSelect(['Atacar', 'Curar'], 'Escolha uma opção:');

    if (opcao === 0) {
      realizarAtaque(personagem, monstroEscolhido);
      realizarAtaque(monstroEscolhido, personagem);
    } else if (opcao === 1) {
      usarPocaoDeCura(personagem);
      realizarAtaque(monstroEscolhido, personagem);
    } else {
      console.log('\nOpção inválida. Por favor, escolha novamente!');
    }
  }

  if (personagem.vida <= 0) {
    console.log(`\n$O personagem ${personagem.nome} foi derrotado. Game Over!`);
  } else {
    console.log(`\nO ${monstroEscolhido.nome} foi derrotado. Parabéns, ${personagem.nome}!`);
  }

  

  // iniciarBatalha(personagem, monstroEscolhido);
}

iniciarRPG();
