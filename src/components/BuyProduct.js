import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import customerService from "../service/CustomerService";
import productService from "../service/ProductService";

export default function BuyProduct() {
  const { id } = useParams();
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const customers = customerService.getAllCustomers();
  const navigate = useNavigate();
  const [product, setProduct] = useState(productService.getProductById(id));

  const handleConfirm = () => {
    customerService.addProductToCustomer(selectedCustomer, product);
    console.log("Customers after buying:", customerService.getAllCustomers());

    if (!selectedCustomer) {
      alert("Molim Vas da izaberete korisnika");
      return;
    }

<<<<<<< HEAD:src/components/BuyProduct.js
    const newCount = productService.decrementQuantity(product.id);
    setProduct({ ...product, count: newCount });

    alert("Kupovina je uspešno potvrđena!");
=======
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

    CustomerService.addProduct(product, selectedCustomer);
    ProductService.decrementQuantity(product.id);
console.log('product', product.id);
console.log('customer', selectedCustomer);
    alert("Kupovina je uspešno potvrđena!");

    navigate('/products');
>>>>>>> c15c2e2e5dad5ba0fee71da6ce1b5e595f0f0ac7:src/components/Buy.js
  };

  const handleCancel = () => {
    navigate("/products");
  };

  if (!product.quantity) {
    return (
      <div className="container mt-4">
        <p>
          Proizvoda nema na lageru. Molimo Vas da se vratite nazad na{" "}
          <Link to={"/products"}>Products</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
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
