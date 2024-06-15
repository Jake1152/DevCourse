import { styled } from "styled-components";

function Header() {
  return (
    <HeaderStyle>
      <h1>book store</h1>
    </HeaderStyle>
  );
}

/**
 * 일반적으로 styled-component는 분리해서 구현한다.
 * 여기서는 확인용도라서 같은 파일에 위치한다.
 */
const HeaderStyle = styled.header`
  background-color: #333;

  h1 {
    color: white;
  }
`;

export default Header;
