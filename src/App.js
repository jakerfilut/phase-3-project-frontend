import "./App.css";
import { react, useState } from "react";
import Navbar from "./components/NavBar/Navbar";
import Product from "./components/Product/Product";
import Slideshow from "./components/Slideshow/Slideshow";
import Department from "./components/Department/Department";
import Checkout from "./components/CheckOut/Checkout";

function App() {
  const [products, setProducts] = useState([]);

  return (
    <div className="App">
      <Navbar />
      <Slideshow />
      <Department />
      <Product products={products} setProducts={setProducts} />
      <Checkout products={products} />
    </div>
  );
}

export default App;
