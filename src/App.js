import "./components/Department/Department.css";
import "./App.css";
import { react, useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Product from "./components/Product/Product";
import ProductDetail from "./components/Product/ProductDetail";
import Slideshow from "./components/Slideshow/Slideshow";
import Department from "./components/Department/Department";
import Checkout from "./components/CheckOut/Checkout";
import Create from "./components/Create/Create";

function App() {
  const [newProd, setNewProd] = useState({});
  const [products, setProducts] = useState([]);

  function handleNewProduct(formData) {
    setNewProd(formData);
    const newProductArray = [...products, newProd];
    setProducts(newProductArray);
  }

  useEffect(() => {
    if (newProd.name == null) {
      console.log("I did not run");
    } else {
      fetch("http://localhost:9292/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProd),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  }, [newProd]);

  useEffect(() => {
    fetch("http://localhost:9292/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [newProd]);

  const addToCart = (prod) => {
    fetch(`http://localhost:9292/products/${prod.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...prod, inventory: (prod.inventory -= 1) }),
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(
          products.map((p) => {
            if (p.id === data.id) {
              return data;
            } else {
              return p;
            }
          })
        );
      });
  };

  return (
    <div className="App">
      <Navbar />
      <Slideshow />
      <Create handleNewProduct={handleNewProduct} />

      <Switch>
        <Route
          path="/products/:id"
          component={() => <ProductDetail addToCart={addToCart} />}
        />

        <Route
          path="/products"
          component={() => (
            <Product
              addToCart={addToCart}
              products={products}
              setProducts={setProducts}
            />
          )}
        />

        <Route path="/cart" component={() => <Checkout />} />
        <Route path="/home" component={() => <Department />} />
      </Switch>
    </div>
  );
}

export default App;
