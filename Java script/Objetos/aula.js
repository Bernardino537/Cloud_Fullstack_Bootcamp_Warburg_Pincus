class Pessoa 
{
    nome;
    idade;
    ano_nascimento;

    constructor(nome, idade)
    {
        this.nome = nome;
        this.idade = idade;
        this.ano_nascimento = 2022 - idade;
    }

    descrever()
    {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function comparar_pessoas(p1, p2)
{
    if (p1.idade > p2.idade)
    {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);        
    }
    else if (p2.idade > p1.idade)
    {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    }
    else
    {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const bruno = new Pessoa('Bruno', 25);
const renan = new Pessoa('Renan', 30);

comparar_pessoas(bruno, renan);