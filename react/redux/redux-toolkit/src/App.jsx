import { useSelector } from "react-redux";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Header from "./components/Header";
import "./App.css";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Product />
        <Cart />
      </main>
    </div>
  );
}

export default App;
