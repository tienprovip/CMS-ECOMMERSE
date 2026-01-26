import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Product from "./pages/Products/Product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Dashboard />}></Route>
            <Route path="dashboard" element={<Dashboard />}></Route>
            <Route path="products" element={<Product />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
