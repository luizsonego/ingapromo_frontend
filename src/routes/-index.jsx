import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout";
import AdminLayout from "../components/layout/AdminLayout";
import Company from "../pages/admin/Company";
import CompanyCreate from "../pages/admin/Company/create";
import CompanyEdit from "../pages/admin/Company/edit";
import AdminCoupon from "../pages/admin/Coupon";
import CreateCoupon from "../pages/admin/Coupon/create";
import CouponEdit from "../pages/admin/Coupon/edit";
import Dashboard from "../pages/admin/Dashboard";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Categories from "../pages/Categories";
import Category from "../pages/Category";
import Coupon from "../pages/Coupon";
import Error404 from "../pages/Error/404";
import Home from "../pages/Home";
import RequireAuth from "../services/RequireAuth";

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="categorias" element={<Categories />} />
        <Route path="categoria/:id" element={<Category />} />
        <Route path="cupom/:id" element={<Coupon />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="empresa" element={<Company />} />
          <Route path="empresa/criar" element={<CompanyCreate />} />
          <Route path="empresa/editar" element={<CompanyEdit />} />
          <Route path="cupom" element={<AdminCoupon />} />
          <Route path="cupom/criar" element={<CreateCoupon />} />
          <Route path="cupom/editar/:id" element={<CouponEdit />} />
        </Route>
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Signup />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}