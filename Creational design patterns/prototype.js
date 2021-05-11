const Logger = function (name) {
    this.name = name;
};
Logger.prototype.sayHi = function () {
    return `Hi ${this.name}`;
};
Logger.prototype.sayBye = function () {
    return `Bye ${this.name}`;
};

// Execution

const A = new Logger("Kante");
const B = new Logger("Srikanth");