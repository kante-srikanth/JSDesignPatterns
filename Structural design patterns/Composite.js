var Div = function () {
    this.create = function (content) {
        return `<div class='item'>${content}</div>`;
    }
}

var DivContainer = function () {
    var children = [];
    var divCustom = document.createElement("DIV");
    divCustom.classList.add('item-container');
    document.body.appendChild(divCustom);
    return {
        add: function (child) {
            children.push(child);
            divCustom.innerHTML += child;
        },

        getChild: function () {
            return children;
        },

        getElement: function () {
            return divCustom;
        },

        // composite pattern: controlling all similar objects uniformely
        show: function () {
            //           children.forEach(item => item.style.display = "block");
            divCustom.querySelectorAll(".item").forEach((item) => {
                item.style.display = "block";
            });
        },

        // composite pattern: controlling all similar objects uniformely
        hide: function () {
            //           children.forEach(item => item.style.display = "none");
            divCustom.querySelectorAll(".item").forEach((item) => {
                item.style.display = "none";
            });
        },
    };

}



//Execution
var d1 = new Div();
var d2 = new Div();
var d3 = new Div();
var d4 = new Div();

var div1 = d1.create("Item 1");
var div2 = d2.create("Item 2");
var div3 = d3.create("Item 3");
var div4 = d4.create("Item 4");


var dc = new DivContainer();
dc.add(div1);
dc.add(div2);
dc.add(div3);
dc.add(div4);

dc.hide();
dc.show();