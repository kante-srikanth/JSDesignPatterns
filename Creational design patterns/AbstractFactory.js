function Laptop({
    name,
    os,
    processor
}) {
    this.name = name || "";
    this.os = os || "";
    this.processor = processor || "";
}

Laptop.prototype.on = function () {
    return `${this.name} - Charging`;
};

Laptop.prototype.off = function () {
    return `${this.name} - Charging is off`;
};

function Tablet({
    name,
    os,
    processor,
    network
}) {
    this.name = name || "";
    this.os = os || "";
    this.processor = processor || "";
    this.network = network || "";
}

Tablet.prototype.on = function () {
    return `${this.name} - Charging`;
};

Tablet.prototype.off = function () {
    return `${this.name} - Charging is off`;
};

var AbstractGadgetFactory = (function () {
    var types = {};
    return {
        registerGadget: function (type, Gadget) {
            let proto = Gadget.prototype;
            if (proto.off && proto.on) {
                types[type] = Gadget;
            }
            return AbstractGadgetFactory;
        },

        createGadget: function (type, options) {
            let Gadget = types[type];
            return Gadget ? new Gadget(options) : null;
        },
    };
})();

// Execution:

var laptop = AbstractGadgetFactory.registerGadget("laptop", Laptop);
var Macbook = laptop.createGadget("laptop", {
    name: "Macbook PRO",
    os: "Mac OS",
    processor: "M1 chip",
});
Macbook.on();
Macbook.off();

var tablet = AbstractGadgetFactory.registerGadget("tablet", Tablet);
var iPad = tablet.createGadget("tablet", {
    name: "iPad 2021",
    os: "iPad OS",
    processor: "A14 Bionic chip",
});
iPad.on();
iPad.off();