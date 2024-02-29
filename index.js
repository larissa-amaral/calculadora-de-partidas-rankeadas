function ranking(vitorias, derrotas){
  let saldoVitorias = vitorias - derrotas;
  let nivel = "";
  
  if (vitorias < 11) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias < 21) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias < 51) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias < 81) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias < 91) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias < 101) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal"
  }
  
  console.log("O Heroi tem o saldo de " + saldoVitorias + " está no nível de " + nivel);
}

ranking(5,3)
ranking(20,5)
ranking(25,3)
ranking(55,3)
ranking(86,3)
ranking(97,2)
ranking(120,9)
