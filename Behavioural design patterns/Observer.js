function eventDispatcherDecorator(obj) {
    var list = {};
    obj.addEvent = function (type, handler) {
        if (!list[type]) {
            list[type] = [];
        }

        if (list[type].indexOf(handler) === -1) {
            list[type].push(handler);
        }
    };

    obj.dispatchEvent = function (e) {
        let self = this;
        if (list[e.type]) {
            if (!e.target) {
                e.target = self;
            }
            list[e.type].forEach((fn) => {
                fn(e);
            });
        }
    };

    obj.removeEvent = function (type, fn) {
        if (list[type]) {
            var index = list[type].indexOf(fn);
            if (index > -1) {
                list[type].splice(index, 1);
            }
        }
    };
}

//Execution
var o = {};
eventDispatcherDecorator(o);
var handler1 = function (e) {
    console.log(e);
    console.log("fire handler 1");
};
var handler2 = function (e) {
    console.log(e);
    console.log("fire handler 2");
};
o.addEvent("fire", handler1);
o.addEvent("fire", handler2);
o.removeEvent("fire", handler2);
o.dispatchEvent({
    type: "fire"
});

//output: fire handler 1