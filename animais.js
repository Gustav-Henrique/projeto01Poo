 class Animal{
    constructor(nome, idade, tipo, familia) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.familia = familia;
        this.alimentado = false;
    }

    alimentarAnimal() {
        this.alimentado = true;
    }

    envelhecerAnimal(anos) {
        this.idade = this.idade + anos;
    }
    jogarBola() {
        console.log(`Você jogou bola com o animal ${this.nome} da raça ${this.tipo}`);
    }

    jogarGraveto() {
        console.log(`Você jogou um Graveto para o animal ${this.nome} da raça ${this.tipo}`);
    }
}

 class Zoo {
    animais = [];

    adicionarAnimal(animal) {
        this.animais.push(animal);
    }

}

const zoologico = new Zoo();

