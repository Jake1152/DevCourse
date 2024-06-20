import { useLocation } from "react-router-dom";
import styled from "styled-compoents";
import Title from "../components/common/Title";

function Order() {
  const location = useLocation();
  const orderDataFromCart = location.state;

  console.log(orderDataFromCart);

  return (
    <>
      <Title size="large">주문서 작성</Title>
      <OrderStyle>
        <h1>Order</h1>
      </OrderStyle>
    </>
  );
}
