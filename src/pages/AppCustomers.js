import React, { useState } from "react";
import CustomerService from "../service/CustomerService";

export default function AppCustomers() {
  const [customers, setCustomers] = useState(CustomerService.getAll());

  const handleDeleteCustomer = (customerId) => {
    CustomerService.deleteCustomer(customerId);
    setCustomers([...CustomerService.getAll()]);
  };

  return (
    <div>
      <h1>Customers:</h1>
      {customers.map((customer) => (
        <div key={customer.id}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Name: <strong>{customer.name}</strong> Surname:{" "}
              <strong>{customer.surname}</strong>
            </li>
          </ul>
          <button
            className="btn btn-danger mt-2"
            style={{ fontSize: "0.8rem", marginLeft: "1rem" }}
            onClick={() => handleDeleteCustomer(customer.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
