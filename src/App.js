import products from "./products.json";
import "./App.css";
import Product from "./components/Product";
import Cart from "./components/Cart";

const App = () => {
  return (
    <>
      <Cart />
      <div className="products">
        {products.map((product) => (
          <Product {...product} />
        ))}
      </div>
    </>
  );
}

export default App;