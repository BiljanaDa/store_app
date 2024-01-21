class ProductService {
  constructor() {
    this.products = [
      { id: 1, name: "Patike" },
      { id: 2, name: "Lopta" },
      { id: 3, name: "Trenerka" },
    ];
  }

  getAll() {
    return this.products;
  }
}

export default new ProductService();
