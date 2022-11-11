function meu_nome(nome)
{
    return 'Meu nome é ' + nome;
}

meu_nome('Bruno');



function valida_idade(idade)
{
    if(idade >= 18)
    {
        console.log(meu_nome('Brunão'), 'Você é maior de idade');
    }
    else
    {
        console.log('Você é menor de idade');
    }
}

valida_idade(18);

