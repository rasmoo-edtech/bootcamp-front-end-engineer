class Investment {
    constructor(id, name, minValue, tax, time) {
        this.id = id;
        this.name = name;
        this.minValue = minValue;
        this.tax = tax;
        this.time = time;
    }

    isValid() {
        return Boolean(this.name && this.minValue && this.tax && this.time);
    }
}

module.exports = Investment;
