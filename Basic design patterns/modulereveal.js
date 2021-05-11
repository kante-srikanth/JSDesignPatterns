(function (window) {
    var chatModule = (function () {
        var _name = "srikanth";
        var _lastname = "kante";

        function _done() {
            console.log("done printing");
        }

        function printHi() {
            console.log("Hi " + _name);
            _done();
        }

        function printBye() {
            console.log("Bye " + _lastname);
            _done();
        }
        return {
            printHi: printHi,
            printBye: printBye,
        };
    })();
    if (!window.chatModule) window.chatModule = chatModule;
})(window);


// Execution: 

chatModule.printHi();
chatModule.printBye();