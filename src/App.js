import "./components/Department/Department.css"
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
import Orders from "./components/CheckOut/Orders";


function App() {


  function handleNewProduct(formData) {
    const newProductArray = [...products, formData];
    setProducts(newProductArray);
    console.log(newProductArray);
  }


  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch("http://localhost:9292/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  
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


   
      {/* <Create /> */}



      <Switch>
        <Route path="/products/:id" component={() => <ProductDetail addToCart={addToCart} />} />


        <Route path="/products" component={() => <Product 
          addToCart={addToCart}
          products={products}
          setProducts={setProducts}
        />} />
        <Route path='/create' component={() => <Create handleNewProduct={handleNewProduct} />} />
        <Route path="/cart" component={() => <Checkout />} />
        <Route path="/orders" component={() => <Orders />} />
        <Route path="/home" component={() => <Department />} />
      </Switch>
    </div>
  );
}

export default App;
