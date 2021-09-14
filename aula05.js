const pessoa1 = dadosDaPessoa();
    
const pessoa2 = dadosDaPessoa();

function dadosDaPessoa() {
    const nome = prompt('digite seu nome');
    
    const sobrenome = prompt('digite seu sobrenome');
    
    let idade; 

    do {
    idade  = parseInt(prompt('digite sua idade, so numeros'));   
    }while(isNaN(idade));

    const pessoa = {
        nome:nome,
        sobrenome: sobrenome,
        idade: idade,
    };

    console.log(pessoa);
    return pessoa;
}

comparaIdade(pessoa1,pessoa2);

function comparaIdade(pessoa1,pessoa2) {
    if (pessoa1.idade === pessoa2.idade) {
        console.log(`${pessoa1.nome} é igual que ${pessoa2.nome}`);
    } else if (pessoa1.idade > pessoa2.idade) {
        console.log(`${pessoa1.nome} é maior que ${pessoa2.idade}`);
   } else{
       console.log(`${pessoa2.nome} é maior que ${pessoa1.nome}`);
   }

}