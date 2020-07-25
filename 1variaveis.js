/*
Camel Case = telefoneAmigo
Snake Case = telefone_Amigo
Kebab Case = telefone-Amigo
*/

var nomeDeUsuario = 'Vinicius' //Declarando uma variável global. O var será substituído se declarado novamente. (Diferentemente do LET)
console.log(nomeDeUsuario)



/*--------------------------------------------------------------------------------------*/



let meuNome = 'Rodrigo'
meuNome = 'Rodrigo Cruz' //Alterando uma variável. Não é necessário usar novamente o 'Let'
console.log(meuNome)


if (true){
    let nomeDeUsuario = 'Daniela' //Mesmo já existindo a variavel nomeDeUsuario, é possivel criar novamente, se em outro bloco, ou contexto
    console.log(nomeDeUsuario)
}



/*--------------------------------------------------------------------------------------*/
//Const não permite alteração do valor

const CARRO = 'Civic'
CARRO = 'fox' // Dará erro, pois o const não permite alterar o valor
console.log(carro)


