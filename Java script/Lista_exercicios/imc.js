/*
    2) O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a coindição de peso de uma pessoa adulta.

    Formula do IMC:
    IMC peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acorodo com a tabela abaixo.


IMC em adultos Condição:

    Abaixo de 18.5 Abaixo do peso;
    Entre 18.5 e 25 Peso normal;
    Entre 25 e 30 Acima do peso;
    Entre 30 e 40 Obeso;
    Acima de 40 Obsesidade Grave;
*/

const peso = 84;
const altura = 1.74;

const imc = peso / (Math.pow(altura,2));

console.log("seu IMC é de:", imc.toFixed(2));

if(imc < 18.5)
{
    console.log("Você está abaixo do peso.")
}
else if(imc >= 18.5 && imc <= 25)
{
    console.log("Você está no peso normal.")
}
else if(imc >= 25 && imc <= 30)
{
    console.log("Você está acima do peso.")
}
else if(imc >= 30 && imc <= 40)
{
    console.log("Você está obeso.")
}
else if(imc >= 40)
{
    console.log("Você está com obesidade grave.")
}



