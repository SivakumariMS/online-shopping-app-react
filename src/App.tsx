import { useState } from "react";
import "./App.css";
import ModalComponent from "./modalComponent";
import type { IProduct } from "./types";
import useProducts from "./useProducts";

function App() {
  const [cart, setCart] = useState<IProduct[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [msg, setMsg] = useState("");
  const { products, loading, error } = useProducts();

  const handleAddToCart = (product: IProduct) => {
    if (cart.length > 0) {
      const isProductInCart = cart.some(
        (car: IProduct) => car.id === product.id,
      );
      if (isProductInCart) {
        setModalVisible(true);
        setMsg(`${product.name} is already in the cart`);
        return;
      }
    }
    setCart((prevCart) => [...prevCart, product]);
    setModalVisible(true);
    setMsg(`${product.name} is added to the cart`);
  };

  const handleRemoveFromCart = (Id: number) => {
    const updatedCart = cart.filter((car: IProduct) => car.id !== Id);
    const findProduct = cart.find((car: IProduct) => car.id === Id);
    setCart(updatedCart);
    setModalVisible(true);
    setMsg(`${findProduct?.name} is removed from the cart`);
  };

  const handleSort = () => {
    if (cart.length > 0) {
      setCart((prevCart) => [...prevCart].sort((a, b) => a.price - b.price));
    }
  };

  const handleClear = () => {
    setCart([]);
    setModalVisible(true);
    setMsg("All products are removed from the cart");
  };

  return (
    <>
      <div id="online-shopping">
        {modalVisible && (
          <ModalComponent
            msg={msg}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        )}
        <h1>Online Shopping</h1>
        <h3>Available Products</h3>
        {loading && <p>Loading products...</p>}
        {error && <p role="alert">{error}</p>}
        {products.map((product) => (
          <div id="products-row" key={product.id}>
            {`${product.name} Rs. ${product.price} `}
            <button id="addItem" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
        <h3>My Cart</h3>
        {cart.map((car: IProduct, index: number) => {
          return (
            <div id="products-row" key={index}>
              {`${car?.name} Rs. ${car?.price} `}
              <button id="addItem" onClick={() => handleRemoveFromCart(car.id)}>
                Remove
              </button>
            </div>
          );
        })}
        {cart.length > 0 && (
          <h3 style={{ display: "flex", justifyContent: "end" }}>
            Total Price: Rs.{" "}
            {cart.reduce((total, product) => total + product.price, 0)}
          </h3>
        )}
        <h3>Actions</h3>
        <button
          id="addItem"
          className="disableBtn"
          style={{ marginRight: "5px" }}
          onClick={() => {
            handleSort();
          }}
          disabled={cart.length === 0}
        >
          Sort By Price
        </button>
        <button
          id="addItem"
          className="disableBtn"
          onClick={() => {
            handleClear();
          }}
          disabled={cart.length === 0}
        >
          Clear Cart
        </button>
      </div>
    </>
  );
}

export default App;
