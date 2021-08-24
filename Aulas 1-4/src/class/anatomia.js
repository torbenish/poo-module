class Person {
    constructor(name, occupation, age) {
        this._name = name;
        this._occupation = occupation;
        this._age = age;
    }

    hello(name, occupation, age) {
        if (occupation === "dev") {
            return `Fala ${occupation} seu nome é ${name} e você tem ${age}`
        } else {
            return `Fala ${occupation} e você tem ${age} anos e sua profissão é ${occupation}`
        }
    }
}

const Pessoa = new Person;

module.exports = Pessoa;