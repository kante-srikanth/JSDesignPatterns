function shipping() {
    this.calculateCost = function (zipCode, weight) {
        return zipCode * weight;
    };
}

function AdvancedShipping() {
    this.calculate = function (zipCode, weight) {
        return (zipCode * weight) / 2;
    };
}

function ShippingAdapter() {
    const shipping = new AdvancedShipping();
    this.calculateCost = function (zipCode, weight) {
        return shipping.calculate(zipCode, weight);
    };
}

// Execution

const mobile = new shipping();
mobile.calculateCost(10, 1000);

const discountmobile = new ShippingAdapter();
discountmobile.calculateCost(10, 1000);