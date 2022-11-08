/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, etiqueta mais juros de 10%

*/

const preco_etiqueta = 100;
const debito = false;
const pix_dinheiro = false;
const parcelamento = 3;

const situacao_cliente = 0;

if(debito === true)
{
    console.log("Você recebeu 10% de desconto.", "Total a pagar R$:",preco_etiqueta - (preco_etiqueta * 0.10).toFixed(2))
}
else if(pix_dinheiro === true)
{
    console.log("Você tem 15% de desconto.", "Total a pagar R$:",preco_etiqueta - (preco_etiqueta * 0.15).toFixed(2))
}
else if(parcelamento <= 2)
{
    console.log("Em duas vezes sem juros.", "Total a pagar R$:", preco_etiqueta / 2)
}
else
{
    console.log("Foi acrescentado 10%.", "Total a pagar R$:", (preco_etiqueta * 0.10) + preco_etiqueta, 'Em 3x de R$:', (((preco_etiqueta * 0.10) + preco_etiqueta) / 3).toFixed(2))
}
