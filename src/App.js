import "./components/Department/Department.css";
import "./App.css";
import { react, useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Product from "./components/Product/Product";
import ProductDetail from "./components/Product/ProductDetail";
import Department from "./components/Department/Department";
import Checkout from "./components/CheckOut/Checkout";
import Create from "./components/Create/Create";
import Orders from "./components/CheckOut/Orders";
import Slideshow from "./components/Slideshow/Slideshow";

function App() {
  const [cart, setCart] = useState([]);
  const [deletes, setDeletes] = useState(false);
  const [updateCart, setUpdateCart] = useState(false);
  useEffect(() => {
    fetch("http://localhost:9292/order_items")
      .then((res) => res.json())
      .then(setCart);
  }, [deletes, updateCart]);

  const handleDelete = (item) => {
    fetch(`http://localhost:9292/order_items/${item.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCart(cart.filter((item) => item.id !== data.id));
        setDeletes(!deletes);
      });
  };

  const [newProd, setNewProd] = useState({});
  function handleNewProduct(formData) {
    setNewProd(formData);
    const newProductArray = [...products, newProd];
    setProducts(newProductArray);
  }

  useEffect(() => {
    if (newProd.name == null) {
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

  const [products, setProducts] = useState([]);
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
        setUpdateCart(!updateCart);
      });
  };

  const [deptFilter, setDeptFilter] = useState("");

  const productsToDisplay = products.filter((product) => {
    return deptFilter === "" || product.department === deptFilter;
  });

  return (
    <div className="App">

      <Navbar cart={cart} setDeptFilter={setDeptFilter} />
      <Slideshow />


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
              productsToDisplay={productsToDisplay}
              setDeptFilter={setDeptFilter}
            />
          )}
        />
        <Route
          path="/create"
          component={() => <Create handleNewProduct={handleNewProduct} />}
        />

        <Route
          path="/cart"
          component={() => <Checkout cart={cart} handleDelete={handleDelete} />}
        />
        <Route path="/orders" component={() => <Orders />} />
        <Route
          path="/home"
          component={() => (
            <>
              <Slideshow products={products} />
              <Department setDeptFilter={setDeptFilter} />
            </>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
