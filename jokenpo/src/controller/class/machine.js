class MachineOptions {
  constructor({ opt }) {
    // Criar uma classe abstrata MachineOptions, depois um método constructor e passar um "opt" dentro do objeto
    this._opt = opt; // Invocar o opt e settar com o método constructor
  }

  sort() {
    const sortOpt = Math.floor(Math.random() * 3 - 0); // Criação da constante sortOpt e depois irá settar, retornar ela.Note que o Floor serve para aparecer número inteiro
    return this._opt[sortOpt].name; // Do return, invoca o this._opt que ele vai se tornar um Array (sortOpt) e irá invocar o name (Pedra, Papel ou Tesoura)
  }

  set opt(option) {
    // Criar um método set e na sequencia invocar o nome do objeto do constructor: "opt". Dentro do parametro do opt será colocado uma informação só para parametrizar, "option"
    this._opt = option; // Invocar o opt passando o valor de option
  }

  get opt() {
    // Criar um método get e invocar a classe do constructor "opt" e não precisa passar parametro pro get
    return this._opt; // Retorna o atributo this.opt
  }
}

module.exports = MachineOptions; // O module.exports irá receber MachineOptions
