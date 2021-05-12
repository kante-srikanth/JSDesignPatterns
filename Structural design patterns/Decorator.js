function Laptop() {
    this.cost;
    this.model;
    this.purchase = function (model) {
        this.model = model;
        this.cost = 1000;
    };
}

function MemoryDecorator(laptop) {
    var cost = laptop.cost;
    laptop.purchase = function () {
        let c = cost + 400;
        laptop.cost = c;
    };
}

function InsuranceDecorator(laptop) {
    var cost = laptop.cost;
    laptop.purchase = function () {
        let c = cost + 500;
        laptop.cost = c;
    };
}

function EngravingDecorator(laptop) {
    var cost = laptop.cost;
    laptop.purchase = function () {
        let c = cost + 100;
        laptop.cost = c;
    };
}

// Execution

var macbook = new Laptop();
macbook.purchase("Macbook");
MemoryDecorator(macbook);
macbook.purchase();
InsuranceDecorator(macbook);
macbook.purchase();
EngravingDecorator(macbook);
macbook.purchase();
macbook.cost; // 2000

var lenovo = new Laptop();
lenovo.purchase();
lenovo.cost; // 1000