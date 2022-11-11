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

function calcular_imc(peso, altura)
{
     return peso / Math.pow(altura, 2);
}

function classificacao_imc(imc)
{
    if(imc < 18.5)
    {
        return 'Você está abaixo do peso.';
    }
    else if(imc >= 18.5 && imc <= 25)
    {
        return 'Você está no peso normal.';
    }
    else if(imc >= 25 && imc <= 30)
    {
        return 'Você está acima do peso.';
    }
    else if(imc >= 30 && imc <= 40)
    {
        return 'Você está obeso.';
    }
    else 
    {
        return 'Você está com obesidade grave.';
    }
}

// Main
(function ()
{
    const peso = 75;
    const altura = 1.75;

    const imc = calcular_imc(peso, altura);
    console.log(classificacao_imc(imc));
})();

main();





