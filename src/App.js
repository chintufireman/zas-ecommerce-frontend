import "./App.css";
import NavBar from "./components/NavBar";
import Product from "./components/Product";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Category from "./components/Category";
import ProductByCategory from "./components/ProductByCategory";
import NewCategory from "./components/NewCategory";
import NewProduct from "./components/NewProduct";
function App() {
  return (
    <>
      <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Product />} />
            <Route exact path="/product" element={<Product />} />
            <Route exact path="/category" element={<Category />} />
            <Route exact path="/product-by-category" element={<ProductByCategory />} />
            <Route exact path="/new-category" element={<NewCategory />} />
            <Route exact path="/new-product" element={<NewProduct />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
