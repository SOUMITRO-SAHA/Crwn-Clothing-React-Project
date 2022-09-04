import { Route, Routes } from "react-router-dom";
import { CategoriesPreview } from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import "./shop.style.scss";

export const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
