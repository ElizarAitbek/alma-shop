import React from "react";
import styled from "styled-components";

const DUMMY_ORDERS = [
  {
    id: "1",
    product: "iPhone 15",
    date: "2024-10-15",
    status: "Жеткирилди",
    total: 999,
  },
  {
    id: "2",
    product: "MacBook Air M2",
    date: "2024-09-10",
    status: "Жөнөтүлдү",
    total: 1199,
  },
  {
    id: "3",
    product: "Apple Watch Series 9",
    date: "2024-08-25",
    status: "Жеткирилди",
    total: 399,
  },
  {
    id: "4",
    product: "AirPods Pro (2nd generation)",
    date: "2024-07-12",
    status: "Артка кайтарылды",
    total: 249,
  },
];

export default function MyOrdersPage() {
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
  height: 100vh;
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
  flex-direction: column;
  gap: 20px;
`;

const OrderCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ProductName = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
`;

const OrderDetails = styled.div`
  text-align: right;
`;

const OrderDate = styled.p`
  font-size: 1rem;
  color: #666;
`;

const OrderStatus = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) =>
    props.status === "Жеткирилди"
      ? "green"
      : props.status === "Жөнөтүлдү"
      ? "blue"
      : props.status === "Артка кайтарылды"
      ? "red"
      : "#666"};
`;

const OrderTotal = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin-top: 8px;
`;
