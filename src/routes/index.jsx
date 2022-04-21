import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout";
import Categories from "../pages/Categories";
import Category from "../pages/Category";
import Error404 from "../pages/Error/404";
import Home from "../pages/Home";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="categorias" element={<Categories />} />
        <Route path="categoria/:id" element={<Category />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}