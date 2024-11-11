import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { DUMMY_ORDERS } from "../utils/constants";

export default function MyOrdersPage() {
  const navigate = useNavigate();

  const handleDetailClick = (orderId) => {
    navigate(`/orders/${orderId}`);
  };

  return (
    <OrdersContainer>
      <Title>Менин Буйрутмаларым</Title>
      <OrdersList>
        {DUMMY_ORDERS.map((order) => (
          <OrderCard key={order.id}>
            <ProductName>{order.product}</ProductName>
            <OrderDetails>
              <OrderDate>Дата: {order.date}</OrderDate>
              <OrderStatus status={order.status}>{order.status}</OrderStatus>
              <OrderTotal>Total: ${order.total}</OrderTotal>
              <DetailButton onClick={() => handleDetailClick(order.id)}>
                Кененирээк маалымат
              </DetailButton>
            </OrderDetails>
          </OrderCard>
        ))}
      </OrdersList>
    </OrdersContainer>
  );
}

const OrdersContainer = styled.div`
  background-color: #f9f9f9;
  color: #333;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: #0a84ff;
  text-align: center;
  margin-bottom: 30px;
`;

const OrdersList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
`;

const OrderCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 500px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ProductName = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
`;

const OrderDetails = styled.div`
  text-align: left;
`;

const OrderDate = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 6px;
`;

const OrderStatus = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${(props) =>
    props.status === "Жеткирилди"
      ? "green"
      : props.status === "Жөнөтүлдү"
      ? "blue"
      : props.status === "Артка кайтарылды"
      ? "red"
      : "#666"};
  margin-bottom: 6px;
`;

const OrderTotal = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const DetailButton = styled.button`
  padding: 12px 20px;
  font-size: 1rem;
  color: #007aff;
  background-color: transparent;
  border: 1px solid #007aff;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #007aff;
    color: #fff;
  }
`;
