class ProductService {
  constructor() {
    this.products = [
      { id: 1, name: "Patike", quantity: 7 },
      { id: 2, name: "Lopta", quantity: 3 },
      { id: 3, name: "Trenerka", quantity: 4 },
    ];
  }

  getAll() {
    return this.products;
  }

  incrementQuantity(productId) {
    const productIndex = this.products.findIndex(
      (prod) => prod.id === productId
    );
    if (productIndex !== -1) {
      this.products[productIndex].quantity++;
    }
    return this.products[productIndex].quantity;
  }

  decrementQuantity(productId) {
    const productIndex = this.products.findIndex(
      (prod) => prod.id === productId
    );
    if (productIndex !== -1 && this.products[productIndex].quantity > 0) {
      this.products[productIndex].quantity--;
    }
    return this.products[productIndex].quantity;
  }

  getId(id) {
    const product = this.products.find((p) => p.id === parseInt(id));
    return product;
  }
}

export default new ProductService();
