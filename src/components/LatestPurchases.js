import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CustomerService from "../service/CustomerService";

export default function LatestPurchases() {
  const { id } = useParams();
  const navigate = useNavigate();
  const customer = CustomerService.getId(id);

  useEffect(() => {
    if (!customer) {
      navigate("/customers");
    }
  }, [customer, navigate]);

  if (!customer) {
    return null;
  }

  return (
    <div>
      <h1>Latest Purchases</h1>
      <p>Name: {customer.name}</p>
      <p>Surname: {customer.surname}</p>
      <h3>List of products:</h3>
    </div>
  );
}
