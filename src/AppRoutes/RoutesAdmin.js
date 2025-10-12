import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import ProductListPage from '../pages/Admin/products/ProductListPage';
import AddProductPage from '../pages/Admin/products/AddProductPage';
import EditProductPage from '../pages/Admin/products/EditProductPage';

import CategoryListPage from '../pages/Admin/categorys/CategoryListPage';
import AddCategoryPage from '../pages/Admin/categorys/AddCategoryPage';
import EditCategoryPage from '../pages/Admin/categorys/EditCategoryPage';

const RoutesAdmin = () => (
  <Routes>
    <Route index element={<Navigate replace to="products" />} />
    <Route path="products" element={<ProductListPage />} />
    <Route path="add-product" element={<AddProductPage />} />
    <Route path="edit-product/:id" element={<EditProductPage />} />
    <Route path="categories" element={<CategoryListPage />} />
    <Route path="add-category" element={<AddCategoryPage />} />
    <Route path="edit-category/:id" element={<EditCategoryPage />} />
    <Route path="*" element={<Navigate replace to="products" />} />
  </Routes>
);

export default RoutesAdmin;
