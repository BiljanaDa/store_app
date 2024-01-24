import React, { useState } from "react";
import customerService from "../service/CustomerService";
import { Link } from "react-router-dom";

export default function AppCustomers() {
  const [customers, setCustomers] = useState(customerService.getAllCustomers());
  const [newCustomer, setNewCustomer] = useState({
    name: "",
    surname: "",
    products: [],
  });

  const handleDeleteCustomer = (id) => {
    customerService.deleteCustomer(id);
    setCustomers(customerService.getAllCustomers());
  };

  const handleAddCustomer = (e) => {
    e.preventDefault();
    customerService.addNewCustomer(newCustomer);
    setCustomers([...customerService.getAllCustomers()]);
    setNewCustomer({ name: "", surname: "" });
  };

  return (
    <div>
      <div className="container">
        <div className="row mt-4">
          <div className="col-12 col-md-6">
            <h2>Add a new customer:</h2>
            <form className="needs-validation">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control rounded-pill"
                  id="name"
                  value={newCustomer.name}
                  onChange={(e) =>
                    setNewCustomer({ ...newCustomer, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="surname" className="form-label">
                  Surname:
                </label>
                <input
                  type="text"
                  className="form-control rounded-pill"
                  id="surname"
                  value={newCustomer.surname}
                  onChange={(e) =>
                    setNewCustomer({ ...newCustomer, surname: e.target.value })
                  }
                  required
                />
              </div>
              <button
                type="button"
                className="btn btn-primary rounded-pill"
                onClick={handleAddCustomer}
              >
                Add Customer
              </button>
            </form>
          </div>
        </div>

        <h1>Customers:</h1>
        {customers.map((customer) => (
          <div key={customer.id} className="row mb-2">
            <div className="col">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Name: <strong>{customer.name}</strong> Surname:{" "}
                  <strong>{customer.surname}</strong>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteCustomer(customer.id)}
              >
                Delete
              </button>
              <Link
                to={`/customers/${customer.id}`}
                className="btn btn-info ml-2"
              >
                Latest Purchases
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
