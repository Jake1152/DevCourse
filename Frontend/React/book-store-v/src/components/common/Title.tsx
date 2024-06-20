import { styled } from "styled-components";
import { ColorKey, HeadingSize } from "../../style/theme";

/**
 * React.ReactNode란?
 * Ref:
 * - https://merrily-code.tistory.com/209
 */
/** 컴포넌트 작성시
 * Props부터 만들면 전체적인 설계가 이루어져서 개발에 용이하다.
 */
interface Props {
  children: React.ReactNode;
  size: HeadingSize;
  color?: ColorKey;
}

// 타이틀 컴포넌트 골격
function Title({ children, size, color }: Props) {
  return (
    <TitleStyle size={size} color={color}>
      {children}
    </TitleStyle>
  );
}

// styled-component as로 쓰인다고 한다.
// styled.h1<Omit<Props, "children">>``; //  Props에서 "children"은 제외한다.
const TitleStyle = styled.h1<Omit<Props, "children">>`
  font-size: ${({ theme, size }) => theme.heading[size].fontSize};
  color: ${({ theme, color }) =>
    color ? theme.color[color] : theme.color.primary};
`;

export default Title;
