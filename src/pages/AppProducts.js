import React, { useState } from "react";
import ProductService from "../service/ProductService";

export default function AppProducts() {
  const [products, setProducts] = useState(ProductService.getAll());
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleIncrement = (productId) => {
    console.log("Incrementing quantity for product with ID:", productId);
    ProductService.incrementQuantity(productId);
    setProducts([...ProductService.getAll()]);
  };

  const handleDecrement = (productId) => {
    ProductService.decrementQuantity(productId);
    setProducts([...ProductService.getAll()]);
  };

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
              <strong>{product.name}</strong> (Stock: {product.quantity})
            </span>
            <div>
              <button
                className="btn btn-success"
                onClick={() => handleIncrement(product.id)}
              >
                +
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDecrement(product.id)}
                disabled={product.quantity === 0}
              >
                -
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
