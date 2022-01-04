import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Product from "./components/Product/Product";
import Slideshow from "./components/Slideshow/Slideshow";
import Department from "./components/Department/Department";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slideshow />
      <Department />
      <Product />
    </div>
  );
}

export default App;
