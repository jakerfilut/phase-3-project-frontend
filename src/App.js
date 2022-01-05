import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Product from "./components/Product/Product";
import Slideshow from "./components/Slideshow/Slideshow";
import Department from "./components/Department/Department";
import Checkout from "./components/CheckOut/Checkout";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slideshow />
      <Department />
      <Product />
      <Checkout />
    </div>
  );
}

export default App;
