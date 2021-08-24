// const rl = require("./interface"); // Criar uma constante chamada rl e invocar o arquivo que está em interface/index.js

// rl.question("Você está gostando de POO?", (resposta) => {
//   console.log(`Sua resposta foi ${resposta}`);
//   rl.close();
// }); //A - Invocar o question, de dentro do question é criado um primeiro parametro com um valor, uma interface (Primeira pergunta) e o segundo parametro será uma função (resposta).
//B - Na sequencia, a interface vai entregar a resposta no console (console.log) e para encerrar a interface da linha de comando, é preciso invocar mais uma vez o rl e usar o "close"

const options = require(`./data`);
// const MachineOptions = require(`./controller/class/machine`);
const User = require("./controller/class/user");

// let sorteio = new MachineOptions({ opt: options }).sort() // Criar uma váriável sorteio que irá receber new MachineOptions e dentro dele, vai passar o opt que vai receber o options. Como é utilizado o "sort", ele irá imprimir (Pedra, Papel ou Tesoura)

let jogar = new User({ opt: options }).game(); // Comentar o let sorteio, e fazer uma váriavel usuario que irá receber new User e dentro dele, vai passar o opt (do Super), name e selected. Como é utilizado o "game", ele irá imprimir o sort, que no caso seria (Pedra, Papel ou Tesoura)

jogar;
