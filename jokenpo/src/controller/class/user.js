const MachineOptions = require("./machine"); // Importar a classe machine para class user
const inquirer = require("inquirer"); // Importar o inquirer do node_modules
const options = require("../../data"); // Importar o options da pasta data/index.js
const gameby = require("../../data/gameby"); // Importar o gameby da pasta data/gameby.js

class User extends MachineOptions {
  // Uso do extends para estender algumas propriedades da classe MachineOptions
  constructor({ opt, name, selected }) {
    // Criação do name (Nome do usuário), selected (Opção que o usuário selecionar) e opt (Opção que a máquina está escolhendo)
    super({ opt }); // Uso o método super para invocar do pai (MachineOptions) o opt
    this._name = name;
    this._selected = selected;
    this._sort = this.sort(); // Invocar a função sort para corrigir o método isolado
  }

  set name(string) {
    // Criar um método set e na sequência vai receber o parametro string
    this._name = string;
  }

  get name() {
    return this._name;
  }

  set selected(string) {
    // Criar um método set e na sequência vai receber o parametro string
    this._selected = string;
  }

  get selected() {
    return this._selected;
  }

  logic() {
    // Criar um método condicional logic com 3 opções: 1º Empate, 2º Máquinha ganhar, 3º Usuário ganhar
    if (this._selected === this._sort) {
      return `${this._name}, A máquina escolheu: ${this._sort}. Você escolheu: ${this._selected} - Resultado -> Você empatou!!`;
    } else if (
      (this._selected === `Pedra` && this._sort === "Tesoura") ||
      (this._selected === `Tesoura` && this._sort === "Papel") ||
      (this._selected === `Papel` && this._sort === "Pedra")
    ) {
      // "===" = significa estritamente igual e "||" = or
      return `${this._name}, A máquina escolheu: ${this._sort}. Você escolheu: ${this._selected} - Resultado -> Você ganhou!!!`;
    } else {
      return `${this._name}, A máquina escolheu: ${this._sort}. Você escolheu: ${this._selected} - Resultado -> Você perdeu!!!`;
    }
  }

  game() {
    // Criar um método game, onde ele irá o sort da classe pai
    // return this._sort + " " + this._sort // Invocar o sort duas vezes e o return para retornar, o sort fica sem o () pois foi criado um this._sort no construtor
    // return this.logic(); // Invocar a função logic
    console.info(gameby); // fazer funcionar o gameby
    return inquirer
      .prompt([
        // Dentro do prompt, passar um Array e dentro desse Array um objeto
        {
          name: "name",
          message: "Qual o seu nome? ",
          default: "Jogador", // Se o usuário não informar um nome, o default vai assumir o nome 'Jogador'
        },
        {
          // Propriedades com as opções que teremos no jogo
          type: "list", // Fazer umna lista com as opções que temos
          name: "jokenpo",
          message: "Selecione uma destas opções ",
          choices: options, // Usando o options do const options que foi importado de data/index.js
        },
      ])
      .then((answers) => {
        // "=>" equivale a function(answers)
        this._name = answers.name;
        this._selected = answers.jokenpo;
        console.info(`O resultado é: ${this.logic()}`);
      });
  }
}

module.exports = User;
