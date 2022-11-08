/*
Você terá 5 variáveis. Sendo elas:

- 1 Preço do etanol
- 2 Preço da gasolina
- 3 O tipo de combustível que está no seu carro
- 4 Valor médio de gasto de combustível por KM;
- 5 Distânciia em KM da viagem;
*/
const preco_etanol = 5.79;
const preco_gasolina = 6.66;
let km_por_litro = 10;
let distancia_km = 100;

let tipo_combustivel = 'etanol';

if (tipo_combustivel === 'gasolina') {
    const Consumo_litros = (distancia_km / km_por_litro) * preco_etanol;
    console.log("Seu consumo médio em etanol é de R$:", Consumo_litros.toFixed(2));
}
else {
    const Consumo_litros = (distancia_km / km_por_litro) * preco_gasolina;
    console.log("Seu consumo médio em gasolina é de R$:", Consumo_litros.toFixed(2));
}



