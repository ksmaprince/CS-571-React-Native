let products = []

module.exports = class Product {
    constructor(id, title, price, description) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
    }

    static getAll() {
        return products;
    }

    static getById(id) {
        const index = products.findIndex(p => p.id === id);
        if (index > -1) {
            return products[index];
        } else {
            throw new Error("Not Found");
        }
    }

    save() {
        this.id = Math.floor(Math.random() * 1000000).toString();
        products.push(this);
        return this;
    }

    update() {
        const index = products.findIndex(p => p.id === this.id);
        if (index > -1) {
            products.splice(index, 1, this);
            return this;
        } else {
            throw new Error("Not Found");
        }
    }

    static deleteById(id) {
        const index = products.findIndex(p => p.id === id);
        if (index > -1) {
            products = products.filter(p => p.id !== id);
        } else {
            throw new Error("Not Found");
        }
    }

}