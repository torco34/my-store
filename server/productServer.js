const { faker } = require("@faker-js/faker");
class ProductsServer {
    constructor(db) {
        this.products = [];
        this.generate()
    }

    generate() {

        const size = 30;

        for (let i = 0; i < size; i++) {

            this.products.push({
                id: faker.string.uuid(), // Ajuste para generar un ID unico
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                description: faker.lorem.sentence(), // Ajuste para generar una oración

            });

        }
    }



    create(data) {
        const productNew = {
            id: faker.string.uuid(),
            ...data
        };
        this.products.push(productNew);
        return productNew;

    }
    find() {
        return this.products;
    }
    findOne(id) {
        return this.products.find(product => product.id === id);
    }
    // update() { }

    update(id, changes) {
        const index = this.products.findIndex(product => product.id === id);
        if (index === -1) {
            return null;
        }
        const product = this.products[index];
        this.products[index] = { ...product, ...changes };
        return this.products[index];
    }
    delete(id) {
        const index = this.products.findIndex(product => product.id === id);
        if (index === -1) {
            return null;
        }
        return this.products.splice(index, 1);
    }
}


module.exports = ProductsServer;