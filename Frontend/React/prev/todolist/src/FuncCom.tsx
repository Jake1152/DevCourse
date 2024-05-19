import React from "react";

// function FuncCom() {
//   return <div>함수형 컴포넌트</div>;
// }

/**
 * 화살표 함수로 만들었을 때의 장점이란?
 * this가 선언된 곳의 상위 실행 컨텐스트를 의미하게 됨
 * 더 좋은게 있는가?
 * 함수 표현식으로 충분하지는 않았을까?
 * @returns HTML div
 */
const FuncCom = () => {
  return <div>함수형 컴포넌트</div>;
};

export default FuncCom;
