function Addition(value) {
    this.value = value;
}

Addition.prototype.add = function (value) {
    this.value += value;
    return this;
};

// Execution

var result = new Addition(100);
result.add(100).add(100).add(100).add(100); // 400