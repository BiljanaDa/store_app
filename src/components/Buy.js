import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductService from "../service/ProductService";
import CustomerService from "../service/CustomerService";

export default function Buy() {
  const { id } = useParams();
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const navigate = useNavigate();
  const customers = CustomerService.getAll();
  const [product, setProduct] = useState(ProductService.getId(id));

  const handleConfirm = () => {
    if (!selectedCustomer) {
      alert("Morate izabrati korisnika pre potvrde kupovine.");
      return;
    }

    const product = ProductService.getId(id);

    if (!product) {
      alert("Proizvod nije pronađen.");
      return;
    }

    if (product.quantity === 0) {
      alert("Proizvod trenutno nije dostupan na lageru.");
      navigate("/products");
      return;
    }

    CustomerService.addProduct(selectedCustomer, product.id);
    ProductService.decrementQuantity(product.id);

    alert("Kupovina je uspešno potvrđena!");

    navigate("/products");
  };

  const handleCancel = () => {
    navigate("/products");
  };

  return (
    <div>
      <h1>Buy Service</h1>
      <select
        onChange={(e) => setSelectedCustomer(e.target.value)}
        value={selectedCustomer}
      >
        <option value="">Please select customer</option>
        {customers.map((customer) => (
          <option key={customer.id} value={customer.id}>
            {customer.name} {customer.surname}
          </option>
        ))}
      </select>
      <button onClick={handleConfirm} className="btn btn-success">
        Confirm
      </button>

      <button onClick={handleCancel} className="btn btn-danger">
        Cancel
      </button>
    </div>
  );
}
