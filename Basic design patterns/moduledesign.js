(function (window) {
    var chatModule = (function () {
        var _name = "srikanth";
        var _lastname = "kante";
        return {
            printHi: () => {
                console.log("Hi " + _name);
            }
            printBye: () => {
                console.log("Bye " + _lastname);
            },
        };
    })();
    if (!window.chatModule) window.chatModule = chatModule;
})(window);

//Execution
chatModule.printHi();
chatModule.printBye();