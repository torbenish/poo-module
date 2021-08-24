const ObjJavascript = require('./literals/objeto')
const ObjJSON = require('./literals/objeto.json')
const Pessoa = require('./class/anatomia')

const mariane = require('./class/gettersAndSetters')

// console.log(ObjJavascript.getFinalPrice())

// console.log(ObjJSON.produto[0].name)

// console.log(Pessoa.hello('Douglas', 'dev', 33))

// console.log(mariane.name)

// const Person = require('./class/metodoPublico')

// let marco = new Person({
//     name: 'Marco',
//     age: 22
// })._name

// console.log(marco)

const Employee = require('./class/metodoPrivado')

let maria = new Employee({
    name: 'Maria',
    age: 19,
    codelanguage: 'Javascript'
})

maria.speak()

maria.stack()