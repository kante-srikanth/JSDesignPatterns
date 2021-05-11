var DBConnection = (function () {
    var instance;
    var count = 0;

    function init() {
        ++count;

        function getDBName() {
            return `Mongo DB ${count}`;
        }

        function getConnectionId() {
            return count;
        }

        function getUserName() {
            return `Admin ${count}`;
        }

        return {
            getDBName: getDBName,
            getConnectionId: getConnectionId,
            getUserName: getUserName,
        };
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
                return instance;
            }
            return instance;
        },
    };
})();

// Execution:

var db1 = DBConnection.getInstance();
var db2 = DBConnection.getInstance();

db1 === db2; // true