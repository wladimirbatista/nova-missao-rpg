// export function rolarDado() {
//   return Math.floor(Math.random() * 6) + 1;  // Simula um dado de 6 lados
// }

function realizarAtaque(atacante, defensor) {
  const rolarDado = Math.floor(Math.random() * 6) + 1;

  const dano = atacante.ataque + rolarDado - defensor.defesa;

  if (dano > 0) {
    defensor.vida -= dano
  } else {
    defensor.vida -= 0
  }

  console.log('\n------------------------------------------------');
  console.log(`${atacante.nome} atacou ${defensor.nome} e causou ${dano > 0 ? dano : 0} de dano!`);
  console.log('------------------------------------------------');
}

function usarPocaoDeCura(personagem) {
  if (personagem.pocaoCura > 0) {
    personagem.vida += 20;
    personagem.pocaoCura--;
    console.log('------------------------------------------------------');
    console.log(`\n${personagem.nome} bebeu uma poção de cura e recuperou 20 de vida.`);
  } else {
    console.log(`${personagem.nome}, você está sem poções de cura!`);
  }
}

export { realizarAtaque, usarPocaoDeCura }
