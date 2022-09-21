//EXERCICIO DE OBJETO ORIENTADO 19/09

//ATIVIDADE 01
/*export class Cliente{
    nome: String;
    idade: Number;

    constructor(
        nome: String,
        idade: Number
    ){
        this.nome = nome
        this.idade = idade
    }

    dadosCliente(){
        console.log(`Os dados do cliente são: \nNome:  ${this.nome} \nIdade:  ${this.idade}`)
    }
}*/


//ATIVIDADE 02
/*export class Aviao{
    horaPartida: String;
    horaPouso: String;

    constructor(
        horaPartida: String,
        horaPouso: String,
    ){
        this.horaPartida = horaPartida
        this.horaPouso = horaPouso
    }

    horariosAviao(){
        console.log(`Os horarios do Avião são: \nPartida:  ${this.horaPartida} \nPouso:  ${this.horaPouso}`)
    }
}*/


//ATIVIDADE 03
/*export class celular{
    marca: string;
    modelo: string;
    polegadas: number;
    cameras: number;

    constructor(
    marca: string,
    modelo: string,
    polegadas: number,
    cameras: number,
    ){
        this.marca = marca
        this.modelo = modelo
        this.polegadas = polegadas
        this.cameras = cameras
    }
}*/


//ATIVIDADE 04
/*export class Funcionario{
    nome: string;
    funcao: string;
    cargo: string;
    setor: string;

    constructor(
    nome: string,
    funcao: string,
    cargo: string,
    setor: string,
    ){
        this.nome = nome
        this.funcao = funcao
        this.cargo = cargo
        this.setor = setor
    }

}*/



//EXERCICIO DE OBJETO ORIENTADO 20/09

//ATIVIDADE 01
/*export class Patinete{
    modelo: string;
    cor: string;
    preco: number;

    constructor(
    modelo: string,
    cor: string,
    preco: number
    ){
        this.modelo = modelo
        this.cor = cor
        this.preco = preco
    }
verModelo () {
    console.log (`Modelo: ${this.modelo}`)
 }
}*/


//ATIVIDADE 02
/*export class ContaBancaria{

    Nome: string;
    Idade: string;
    Cpf: string;
    NumeroConta: string;
    Agencia: string;
    TipoBanco: string;

constructor(
    Nome: string,
    Idade: string,
    Cpf: string,
    NumeroConta: string,
    Agencia: string,
    TipoBanco: string,
){this.Nome = Nome
    this.Idade = Idade;
    this.Cpf = Cpf;
    this.NumeroConta = NumeroConta;
    this.Agencia = Agencia;
    this.TipoBanco = TipoBanco;
}
    verAtributos(){
        console.log(`INFORMAÇÕES DA CONTA BANCÁRIA
        \nNome: ${this.Nome}
        \nIdade: ${this.Idade}
        \nCPF: ${this.Cpf}
        \nNumero da Conta: ${this.NumeroConta}
        \nAgência: ${this.Agencia}
        \nNome do Banco: ${this.TipoBanco}`)
    }
}*/


//ATIVIDADE 03
/*export class Paciente{

    Nome: string;
    Idade: number;
    DataChecagem: string;
    DataInternação: string;
    peso: number;
    altura: number;

constructor(

    Nome: string,
    Idade: number,
    DataChecagem: string,
    DataInternação: string,
    peso: number,
    altura: number,


){
    this.Nome = Nome
    this.Idade = Idade
    this.DataChecagem = DataChecagem
    this.DataInternação = DataInternação
    this.peso = peso
    this.altura = altura
}
    verAtributos(){
        console.log(`DADOS DO PACIENTE
        \nNome: ${this.Nome}
        \nIdade: ${this.Idade}
        \nPeso: ${this.peso}
        \nAltura: ${this.altura}
        \nData de checagem: ${this.DataChecagem}
        \nData de Internação: ${this.DataInternação}`)
    }

}*/



//EXERCICIO DE HERANÇA E POLIMORFISMO

/*export abstract class Animal {
    nome: string;
    idade: number;

    constructor(
        nome: string,
        idade: number
    ){
        this.nome = nome
        this.idade = idade
    }

    som():void{
    }
    correr():void{
    }
}*/