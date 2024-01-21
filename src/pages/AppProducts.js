import React, { useState } from "react";
import ProductService from "../service/ProductService";

export default function AppProducts() {
  const products = ProductService.getAll();

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Product List</h1>
      <ul className="list-group list-group-flush">
        {products.map((product) => (
          <li
            key={product.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="d-flex align-items-center">
              <strong>{product.name}</strong>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
