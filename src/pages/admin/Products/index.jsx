import React from 'react';
import NavBarAdmin from '../../../components/NavBarAdmin';
const Products = () => {
    return (
        <div>
            <NavBarAdmin
                title="Produtos"
                link="/admin/editar/produto"
                linkText="Editar Produto"
            />
            <h1>Products</h1>
        </div>
    )
}
export default Products;