var GadgetFactory = (function () {
    function Laptop({
        name,
        os,
        processor
    }) {
        this.name = name || "Laptop";
        this.os = os || "Mac OS";
        this.processor = processor || "M1 Chip";
    }

    function Tablet({
        name,
        os,
        processor,
        network
    }) {
        this.name = name || "Tablet";
        this.os = os || "iPad OS";
        this.processor = processor || "A14 Bionic Chip";
        this.network = network || "4G";
    }
    return {
        createGadget: function (type, attributes) {
            return type === "Laptop" ?
                new Laptop(attributes) :
                new Tablet(attributes);
        },
    };
})();


// Execution:

var laptop = GadgetFactory.createGadget("Laptop", {
    name: "Macbook PRO",
    os: "Mac OS",
    processor: "M1 chip",
});
var tablet = GadgetFactory.createGadget("Tablet", {
    name: "iPad 2021",
    os: "iPad OS",
    processor: "A14 Bionic chip",
});