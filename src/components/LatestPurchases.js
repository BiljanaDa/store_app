import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomerService from "../service/CustomerService";

export default function LatestPurchases() {
  const { id } = useParams();
  const navigate = useNavigate();
  const customer = CustomerService.getId(id);

  if (!customer) {
    return navigate("/customers");
  }

  return (
    <div>
      <h1>Latest Purchases</h1>
      <p>Name: {customer.name}</p>
      <p>Surname: {customer.surname}</p>
      <h3>List of products:</h3>
      <ul>
        {customer.products.length > 0
          ? customer.products.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))
          : "There are no products in this list"}
      </ul>
    </div>
  );
}
