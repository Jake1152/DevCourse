import React from "react";

// 값을 가져올 떄 왜 {}로 감싸는가?
// probs라서? 프로퍼티니까 멤버변수라서?
// 호출한 곳에서는 이렇게 함
//  <B count={count} />

const B = ({ count }) => {
  return <div>B</div>;
};

export default B;
