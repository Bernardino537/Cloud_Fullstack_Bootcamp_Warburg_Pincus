/*
1) faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;

*/
let nota1 = 8;
let nota2 = 8;
let nota3 = 8;

const nota_total = (nota1 + nota2 + nota3) / 3;

console.log("Sua nota foi de:", nota_total.toFixed(2));

const media_aluno = nota_total;

if(media_aluno < 5)
{
    console.log("Infelizmente você reprovou.")
}
else if(media_aluno >= 5 && media_aluno <= 7)
{
    console.log("Você está de recuperação!")
}
else
{
    console.log("Parabens, você passou!")
}
