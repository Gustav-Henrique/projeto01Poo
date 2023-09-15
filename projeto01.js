import PromptSync from "prompt-sync";
import Zoo from "./zoo.js";
import Animal from "./animais.js"

const prompt = PromptSync();

const nome = prompt("Informe seu nome: ");

const opcoes = Number(prompt(`Olá ${nome}, o que deseja fazer?
1- Adicionar Animal 
2- `))

const onca = new Animal("levy", 3, "onça", "");

console.log(onca)
