class CustomerService {
  constructor() {
    this.nextId = 4;
    this.customers = [
      { id: 1, name: "Pera", surname: "Peric", products: [] },
      { id: 2, name: "Mika", surname: "Mikic", products: [] },
      { id: 3, name: "Mila", surname: "Milic", products: [] },
    ];
  }

  getAll() {
    return this.customers;
  }

  getId(id) {
    return this.customers.find((customer) => customer.id === parseInt(id));
  }

  deleteCustomer(customerId) {
    this.customers = this.customers.filter(
      (customer) => customer.id !== customerId
    );
  }

  addNewCustomer(newCustomer) {
    const customerToAdd = { id: this.nextId++, ...newCustomer };
    this.customers.push(customerToAdd);
  }

  addProduct(product,id) {
    console.log('customer service', id);
    console.log('customer service', product);
    const index = this.customers.findIndex(
      (customer) => customer.id === parseInt(id)
    );
    this.customers[index].products.push({ ...product });
  }
}

export default new CustomerService();
