function TrafficLight() {
    var count = 0;
    var currentState = new Red(this);

    this.change = function (state) {
        if (count++ >= 10) return;
        currentState = state;
        currentState.go();
    };

    this.start = function () {
        currentState.go();
    };
}

function Red(light) {
    this.light = light;
    this.go = function () {
        console.log("Red light is on");
        light.change(new Green(light));
    };
}

function Green(light) {
    this.light = light;
    this.go = function () {
        console.log("Green light is on");
        light.change(new Yellow(light));
    };
}

function Yellow(light) {
    this.light = light;
    this.go = function () {
        console.log("Yellow light is on");
        light.change(new Red(light));
    };
}

// Execution

var light = new TrafficLight();
light.start();

/*

Output

Red light is on
Green light is on
Yellow light is on
Red light is on
Green light is on
Yellow light is on
Red light is on
Green light is on
Yellow light is on
Red light is on
Green light is on
*/