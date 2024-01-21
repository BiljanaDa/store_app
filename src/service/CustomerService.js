class CustomerService {
  constructor() {
    this.customers = [
      { id: 1, name: "Pera", surname: "Peric" },
      { id: 2, name: "Mika", surname: "Mikic" },
      { id: 3, name: "Mila", surname: "Milic" },
    ];
  }

  getAll() {
    return this.customers;
  }

  deleteCustomer(customerId) {
    this.customers = this.customers.filter(
      (customer) => customer.id !== customerId
    );
  }
}

export default new CustomerService();
