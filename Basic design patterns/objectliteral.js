// Object literal design pattern
var logger = {
  firstname: "srikanth",
  lastname: "kante",
  sayHi: function () {
    return `Hi ${this.firstname} ${this.lastname}`;
  },
  sayBye: function () {
    return `Bye ${this.firstname} ${this.lastname}`;
  },
  sayGM: function () {
    return `Good morning ${this.firstname} ${this.lastname}`;
  },
  sayGA: function () {
    return `Good afternoon ${this.firstname} ${this.lastname}`;
  },
  sayGE: function () {
    return `Good evening ${this.firstname} ${this.lastname}`;
  },
};

//Execution

logger.sayHi();
logger.sayGM();
logger.sayGA();
logger.sayGE();
logger.sayBye();