/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, etiqueta mais juros de 10%

*/

function aplicar_desconto(valor, desconto)
{
    return (valor - (valor * (desconto / 100)).toFixed(2));
}
function aplicar_juros(valor, juros)
{  
    return (valor + (valor * (juros / 100).toFixed(2)));
}





const preco_etiqueta = 100;
const forma_pagamento = 3;
const quantidade_parcela = 3;

if(forma_pagamento === 1)
{
    console.log('Você recebeu 10% de desconto. Total a pagar R$:' + aplicar_desconto(preco_etiqueta, 10).toFixed(2));
}
else if(forma_pagamento === 2)
{
    console.log("Você tem 15% de desconto.", "Total a pagar R$:" + aplicar_desconto(preco_etiqueta, 15).toFixed(2));
}
else if(quantidade_parcela <= 2)
{
    console.log("Em duas vezes sem juros.", "Total a pagar R$:", preco_etiqueta / 2);
}
else
{
    console.log("Foi acrescentado 10% de juros. Total a pagar R$:", aplicar_juros(preco_etiqueta, 10).toFixed(2), 'podendo parcelar em até 3x de R$:', (aplicar_juros(preco_etiqueta, 10).toFixed(2) /3).toFixed(2));
}
