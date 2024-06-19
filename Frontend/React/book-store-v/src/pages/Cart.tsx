import styled from "styled-components";
import Title from "../components/common/Title";

function Cart() {
  return (
    <>
      <Title size="large">장바구니</Title>
      <CartStyle>
        <div className="content"></div>
        <div className="summary"></div>
      </CartStyle>
    </>
  );
}

const CartStyle = styled.div``;

export default Cart;
/*
모듈은 크게 두 종류로 나뉩니다.

복수의 함수가 있는 라이브러리 형태의 모듈(위 예시의 say.js)
개체 하나만 선언되어있는 모듈(아래의 user.js. class User 하나만 내보내기 함)
*/
