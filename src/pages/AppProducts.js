import React, { useState } from "react";
import ProductService from "../service/ProductService";

export default function AppProducts() {
  const products = ProductService.getAll();
  const [search, setSearch] = useState("");
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Product List</h1>
      <input
        type="text"
        className="form-control form-control-sm py-2 w-50 mb-3"
        placeholder="Search by product name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul className="list-group list-group-flush w-50">
        {filteredProducts.map((product) => (
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
