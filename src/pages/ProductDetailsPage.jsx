import styled from "styled-components";
import { DUMMY_DATA } from "../utils/constants";
import { useParams } from "react-router-dom";

export default function ProductDetailsPage() {
  const { productId } = useParams();

  const selectedProduct = DUMMY_DATA.filter(
    (product) => product.id === productId
  );

  return (
    <PageContainer>
      {selectedProduct.map((item) => (
        <div key={item.id}>
          <ProductImage src={item.imageUrl} alt="Product Name" />
          <ProductInfo>
            <ProductTitle>{item.name}</ProductTitle>
            <ProductDescription>{item.description}</ProductDescription>
            <ProductPrice>${item.price}</ProductPrice>
            <OrderButton>Order Now</OrderButton>
          </ProductInfo>
        </div>
      ))}
    </PageContainer>
  );
}

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: #f9f9f9;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 600px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const ProductInfo = styled.div`
  width: 100%;
  text-align: center;
`;

const ProductTitle = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 12px;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #007aff;
  margin-bottom: 20px;
`;

const OrderButton = styled.button`
  padding: 12px 20px;
  font-size: 1.2rem;
  color: #fff;
  background-color: #007aff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #005bb5;
  }
`;
