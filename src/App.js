import CartPage from "./pages/cartPage";
import Home from "./pages/home";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <Home />
      </div>
      <div>
        <CartPage />
      </div>
    </div>
  );
}

export default App;
