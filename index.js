let nivel;
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite seu nome: ", (nome) => {
rl.question("Digite sua quantidade de XP: ", (quantxp) => {

    if (quantxp <= 1000) {
      nivel = "Ferro";
    } else if (quantxp <= 2000) {
      nivel = "Bronze";
    } else if (quantxp <= 5000) {
      nivel = "Prata";
    } else if (quantxp <= 7000) {
      nivel = "Ouro";
    } else if (quantxp <= 8000) {
      nivel = "Platina";
    } else if (quantxp <= 9000) {
      nivel = "Ascendente";
    } else if (quantxp <= 10000) {
      nivel = "Imortal";
    } else {
      nivel = "Radiante";
    }

    console.log("O Herói de nome **", nome ,"** está no nível de **", nivel ,"**");
    
    rl.close();
  });
});
