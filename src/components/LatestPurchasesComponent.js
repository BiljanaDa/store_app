import React from "react";
import { useParams } from "react-router-dom";
import customerService from "../service/CustomerService";

export default function LatestPurchasesComponent() {
  const { id } = useParams();
  const customer = customerService.getCustomerById(id);

  if (!customer) {
    return <div>Customer not found</div>;
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Latest Purchases</h1>
      <p>
        <strong>Name:</strong> {customer.name}
      </p>
      <p className="mb-4">
        <strong>Surname:</strong> {customer.surname}
      </p>

      <>
        <h3>List of Products:</h3>
        <ul>
          {customer.products.length > 0 ? (
            customer.products.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))
          ) : (
            <p>There are no products in this list</p>
          )}
        </ul>
      </>
    </div>
  );
}
