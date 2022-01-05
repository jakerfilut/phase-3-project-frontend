import "./App.css";
import { react, useState } from "react";
import { Switch, Route } from 'react-router-dom';
import Navbar from "./components/NavBar/Navbar";
import Product from "./components/Product/Product";
import ProductDetail from "./components/ProductDetail/ProductDetail";
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

      <Switch>
      
       
        <Route
          path="/products/:id"
          component={() => (
            <ProductDetail />
          )}
        />

        <Route
          path="/products"
          component={() => (
            <Product products={products} setProducts={setProducts}
            />
          )}
        />
        <Route
          path="/cart"
          component={() => (
            <Checkout products={products}
            />
          )}
        />
        </Switch>
    </div>
  );
}

export default App;
