import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Resetpassword from "./pages/Resetpassword";
import Forgotpassword from "./pages/Forgotpassword";
import MainLayout from "./components/MainLayout";
import Brand from "./pages/Brand";
import Category from "./pages/Category";
import ProductList from "./pages/ProductList";
import Products from "./pages/Products";
import CostEstimation from "./pages/CostEstimation";
import Order from "./pages/Order";
import ProductViewPage from "./pages/ProductViewPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/admin/Products" element={<Products />} />
          <Route path="/admin/Products/:id" element={<Products />} />
          <Route path="/admin/ProductViewPage" element={<ProductViewPage />} />
          <Route path="/admin/ProductViewPage/:id" element={<ProductViewPage />} />
          <Route path="/admin/ProductList" element={<ProductList />} />
          <Route path="/admin/category" element={<Category />} />
          <Route path="/admin/brand" element={<Brand />} />
          <Route path="/admin/costEstimation" element={<CostEstimation />} />
          <Route path="/admin/order" element={<Order />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
