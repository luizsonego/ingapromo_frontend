import { Navigate, useRoutes } from 'react-router-dom'
import Layout from '../components/layout'
import AdminLayout from '../components/layout/AdminLayout'
import Banner from '../pages/admin/Banner'
import CreateBanner from '../pages/admin/Banner/create'
import EditBanner from '../pages/admin/Banner/edit'
import CategoryAdmin from '../pages/admin/Category'
import CategoryCreate from '../pages/admin/Category/create'
import EditCategory from '../pages/admin/Category/edit'
import Company from '../pages/admin/Company'
import CompanyCreate from '../pages/admin/Company/create'
import CompanyEdit from '../pages/admin/Company/edit'
import AdminCoupon from '../pages/admin/Coupon'
import CreateCoupon from '../pages/admin/Coupon/create'
import CouponEdit from '../pages/admin/Coupon/edit'
import UsedCoupon from '../pages/admin/Coupon/used'
import Dashboard from '../pages/admin/Dashboard'
import ManageCompanies from '../pages/admin/ManageCompanies'
import ManageCoupons from '../pages/admin/ManageCoupons'
import Login from '../pages/auth/Login'
import Signup from '../pages/auth/Signup'
import Categories from '../pages/Categories'
import Category from '../pages/Category'
import Coupon from '../pages/Coupon'
import Error404 from '../pages/Error/404'
import Home from '../pages/Home'
import ProfileShop from '../pages/ProfileShop'
import ListShops from '../pages/Shops/ListShops'
import { isAuthenticated } from '../services/auth'

export default function MainRouter() {
  return useRoutes([
    /**For user authenticated only */
    {
      path: '/admin',
      element: isAuthenticated() ? <AdminLayout /> : <Navigate to="/login" />,
      children: [
        { element: <Navigate to="/admin/dashboard" /> },
        { path: '/admin/dashboard', element: <Dashboard /> },
        {
          path: 'empresa',
          children: [
            { path: '', element: <Company /> },
            { path: 'criar', element: <CompanyCreate /> },
            { path: 'editar', element: <CompanyEdit /> },
          ],
        },
        {
          path: 'cupom',
          children: [
            { path: '', element: <AdminCoupon /> },
            { path: 'criar', element: <CreateCoupon /> },
            { path: 'editar/:id', element: <CouponEdit /> },
          ],
        },
        {
          path: 'meus-cupons',
          children: [{ path: '', element: <UsedCoupon /> }],
        },
        //ADMIN
        {
          path: 'categorias',
          children: [
            { path: '', element: <CategoryAdmin /> },
            { path: 'criar', element: <CategoryCreate /> },
            { path: 'editar/:id', element: <EditCategory /> },
          ],
        },
        {
          path: 'banner',
          children: [
            { path: '', element: <Banner /> },
            { path: 'criar', element: <CreateBanner /> },
            { path: 'editar/:id', element: <EditBanner /> },
          ],
        },
        {
          path: 'empresas',
          children: [
            { path: '', element: <ManageCompanies /> },
            { path: 'criar', element: <CompanyCreate /> },
            { path: 'editar', element: <CompanyEdit /> },
          ],
        },
        {
          path: 'manage-coupons',
          children: [{ path: '', element: <ManageCoupons /> }],
        },
      ],
    },
    /**All Users view */
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '', element: <Home /> },
        { path: 'categorias', element: <Categories /> },
        { path: 'categoria/:slug', element: <Category /> },
        { path: 'cupom/:id', element: <Coupon /> },
        { path: 'loja/:id', element: <ProfileShop /> },
        { path: 'lojas', element: <ListShops /> },
      ],
    },
    /**Login/Sign */
    { path: '/cadastro', element: <Signup /> },
    { path: '/login', element: <Login /> },
    /** 404  */
    { path: '*', element: <Error404 /> },
  ])
}
