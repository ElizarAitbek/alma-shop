import React from "react";
import ProductList from "../components/ProductList";
import { DUMMY_DATA } from "../utils/constants";
import styled from "styled-components";

export default function ProductsPage() {
  return (
    <ProductsContainer>
      <h1>Сатыктагы товарлар</h1>
      <ProductList products={DUMMY_DATA} />
    </ProductsContainer>
  );
}

const ProductsContainer = styled.div`
  color: #1c1c1e;
  background-color: #f5f5f7;
  min-height: 100vh;
  padding: 40px 20px;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 16px;
    color: #0a84ff;
  }
`;
