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
    const product = this.products.find((prod) => prod.id === productId);
    if (product) {
      product.quantity++;
    }
  }

  decrementQuantity(productId) {
    const product = this.products.find((prod) => prod.id === productId);
    if (product && product.quantity > 0) {
      product.quantity--;
    }
  }
}

export default new ProductService();
