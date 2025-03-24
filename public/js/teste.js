
let nome = ""; //variável 


const name = "Carol"; //variável constante, não pode ser alterada


let pessoa = { //declarando objetos
    nome: "Carla",
    idade: "35"
}
//para pegar apenas uma propriedade do objeto: console.log(pessoa.nome);
//chamar todas as propriedades de um objeto: console.log(pessoa);


function funcao() { //declarando função sem parâmetro
    nome = "Camila";
}
funcao(); //chamando função


function funcaoComPar (alteranome) { //função com parâmetro
    nome = alteranome;
}
funcaoComPar(); //chamando função com parâmetros


let nomes = [carol, maria, camila] //array se inicia na posição 0 - //array para criar listas
console.log(nomes[1]); //imprime maria que está na posição 1

let pessoas = [ //lista de objetos
    {
    nome: "Carla",
    idade: "35"
    },
    {
    nome: "Luiza",
    idade: "39"
        }
]; 

let pessoasListaVazia = []; //lista de objetos vazia

