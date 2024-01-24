import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppCustomers from "./pages/AppCustomers";
import AppProducts from "./pages/AppProducts";
import Home from "./pages/Home";
import Navs from "./components/Navs";
import LatestPurchasesComponent from "./components/LatestPurchasesComponent";
import BuyProduct from "./components/BuyProduct";

function App() {
  return (
    <Router>
      <Navs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<AppCustomers />} />
        <Route path="/customers/:id" element={<LatestPurchasesComponent />} />
        <Route path="products" element={<AppProducts />} />
        <Route path="products/:id" element={<BuyProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
