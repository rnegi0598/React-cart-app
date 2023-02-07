import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./features/navbar/NavBar";
import Home from "./features/products/Home";
import ProductView from "./features/products/ProductView";
import AddProduct from "./features/products/AddProduct";
import Cart from "./features/cart/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductView />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
