import logo from "./logo.svg";
import "./App.css";
import Navs from "./components/Navs";
import AppCustomers from "./pages/AppCustomers";
import AppProducts from "./pages/AppProducts";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, LInk } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"customers"} element={<AppCustomers />}></Route>
        <Route path={"products"} element={<AppProducts />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
