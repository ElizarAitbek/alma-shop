import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { DUMMY_ORDERS } from "../utils/constants";

export default function OrdersDetails() {
  const { orderId } = useParams();
  const order = DUMMY_ORDERS.find((order) => order.id === orderId);

  const getStatusDescription = (status) => {
    switch (status) {
      case "Жеткирилди":
        return "Буюрмаңыз ийгиликтүү жеткирилди! Бизди тандаганыңыз үчүн рахмат!";
      case "Жөнөтүлдү":
        return "Буюрмаңыз жөнөтүлдү. Жакынкы арада жеткирилип берилет, күтө туруңуз.";
      case "Артка кайтарылды":
        return "Буюрмаңыз кайра артка кайтарылды. Эгер суроолоруңуз калса, кардарларды колдоо кызматы менен байланышсаңыз болот.";
      default:
        return "Буюрманын статусу белгисиз. Тактоо үчүн, кардарларды колдоо кызматы менен байланышсаңыз.";
    }
  };

  return (
    <DetailsContainer>
      <Title>Буюртманын детальдары</Title>
      <OrderInfo>
        <OrderField>
          <FieldLabel>Аталышы:</FieldLabel> {order.product}
        </OrderField>
        <OrderField>
          <FieldLabel>Сүрөттөмө:</FieldLabel> {order.description}
        </OrderField>
        <OrderField>
          <FieldLabel>Буюртма берилген датасы:</FieldLabel> {order.date}
        </OrderField>
        <OrderField>
          <FieldLabel>Статус:</FieldLabel> {order.status}
        </OrderField>
        <OrderField>
          <StatusDescription>
            {getStatusDescription(order.status)}
          </StatusDescription>
        </OrderField>
        <OrderField>
          <FieldLabel>Жалпы суммасы:</FieldLabel> ${order.total}
        </OrderField>
      </OrderInfo>
    </DetailsContainer>
  );
}

const DetailsContainer = styled.div`
  background-color: #f9f9f9;
  padding: 40px 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #0a84ff;
  margin-bottom: 30px;
  text-align: center;
`;

const OrderInfo = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 24px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const OrderField = styled.div`
  font-size: 1.2rem;
  color: #333;
  margin: 12px 0;
  line-height: 1.6;
`;

const FieldLabel = styled.span`
  font-weight: bold;
  color: #555;
`;

const StatusDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-top: 8px;
  line-height: 1.5;
`;

const NotFound = styled.div`
  font-size: 1.5rem;
  color: red;
  text-align: center;
  margin-top: 40px;
`;
