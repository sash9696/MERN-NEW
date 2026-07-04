import React, { Suspense } from "react";
import { Link, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// // import Products from "./pages/Products";
// import Admin from "./pages/Admin";


const Admin = React.lazy(() => import("./pages/Admin"))
const Products = React.lazy(() => import("./pages/Products"))
const Home = React.lazy(() => import("./pages/Home"))


function App() {
  return (
    <>
      <nav
        style={{
          display: "flex",
          gap: "20px",
          marginBotto: "20px",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/admin">Admin</Link>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/admin" element={<Admin />} />


        </Routes>
      </Suspense>
      </nav>
    </>
  );
}

export default App;
