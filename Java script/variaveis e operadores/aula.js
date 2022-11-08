/*Faça um programa para calcular o valor gasto de combustivel em uma viagem.

Você terá 3 três variáveis. Sendo elas:

- 1 Preço do combustível
- 2 Valor médio de gasto de combustível por KM;
- 3 Distânciia em KM da viagem;

Imprima no console o valor que sera gasto de combustível para realizar esta viagem.*/

const preco_combustivel = 5.79;
let km_por_litro = 13;
let distancia_km = 1370;

const Consumo_litros = (distancia_km / km_por_litro) * preco_combustivel;

console.log(Consumo_litros.toFixed(2));
