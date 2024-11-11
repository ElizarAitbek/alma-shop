import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function ProductList({ products }) {
  const navigate = useNavigate();

  const handleDetailClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <ProductListContainer>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductImage src={product.imageUrl} alt={product.name} />
          <ProductDetails>
            <ProductName>{product.name}</ProductName>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>${product.price}</ProductPrice>
            <ButtonContainer>
              <DetailButton onClick={() => handleDetailClick(product.id)}>
                Подробнее
              </DetailButton>
              <OrderButton>Заказать</OrderButton>
            </ButtonContainer>
          </ProductDetails>
        </ProductCard>
      ))}
    </ProductListContainer>
  );
}

const ProductListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const ProductCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  width: 300px;
  height: 400px;

  &:hover {
    box-shadow: 6px 14px 16px rgba(0, 0, 0, 0.15);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

const ProductDetails = styled.div`
  padding: 16px;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 8px;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 12px;
  height: 60px;
  overflow: hidden;
`;

const ProductPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #007aff;
  margin-bottom: 12px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DetailButton = styled.button`
  padding: 8px 12px;
  font-size: 1rem;
  color: #007aff;
  background-color: transparent;
  border: 2px solid #007aff;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #007aff;
    color: #fff;
  }
`;

const OrderButton = styled.button`
  padding: 8px 12px;
  font-size: 1rem;
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
