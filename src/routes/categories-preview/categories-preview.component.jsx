import React from "react";
import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

export const CategoriesPreview = () => {
  const { CategoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(CategoriesMap).map((title) => {
        const products = CategoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};
