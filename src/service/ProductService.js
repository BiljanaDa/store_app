class ProductService {
  constructor() {
    this.products = [
      { id: 1, name: "Patike", quantity: 7 },
      { id: 2, name: "Trenerke", quantity: 4 },
      { id: 3, name: "Lopta", quantity: 3 },
    ];
  }

  getAllProducts() {
    return this.products;
  }

  getProductById(id) {
    return this.products.find((product) => product.id === parseInt(id));
  }

  incrementQuantity(productId) {
    const product = this.products.find((p) => p.id === productId);
    if (product) {
      product.quantity++;
    }
  }

  decrementQuantity(productId) {
    const productIndex = this.products.findIndex(
      (product) => product.id === productId
    );
    if (productIndex !== -1) {
      this.products[productIndex].quantity--;
    }
  }
}

const productService = new ProductService();
export default productService;
