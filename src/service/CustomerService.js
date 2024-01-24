import productService from "./ProductService";

class CustomerService {
  constructor() {
    this.nextId = 4;
    this.customers = [
      { id: 1, name: "Pera", surname: "Peric", products: [] },
      { id: 2, name: "Mika", surname: "Mikic", products: [] },
      { id: 3, name: "Mila", surname: "Milic", products: [] },
    ];
  }

  getAllCustomers() {
    return this.customers;
  }

  getCustomerById(id) {
    return this.customers.find((customer) => customer.id === parseInt(id));
  }

  deleteCustomer(id) {
    this.customers = this.customers.filter((customer) => customer.id !== id);
  }

  addNewCustomer(newCustomer) {
    const customerToAdd = { id: this.nextId++, ...newCustomer };
    this.customers.push(customerToAdd);
  }

<<<<<<< HEAD
  addProductToCustomer(id, product) {
=======
  addProduct(product,id) {
    console.log('customer service', id);
    console.log('customer service', product);
>>>>>>> c15c2e2e5dad5ba0fee71da6ce1b5e595f0f0ac7
    const index = this.customers.findIndex(
      (customer) => customer.id === Number(id)
    );
    this.customers[index].products.push({ ...product });
  }
}

const customerService = new CustomerService();
export default customerService;
