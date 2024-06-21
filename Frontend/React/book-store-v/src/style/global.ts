// [14주차-Day3]컴포넌트 및 상태 정보 관리 프로젝트
import { createGlobalStyle } from "styled-components";
import "sanitize.css";
import { ThemeName } from "./theme";

/** GlobalStyle
 * GlobalStyle은 하위에 어떤 스타일을 포함할 수 있다.
 *
 * theme name에 따라서 기본스타일이 바뀌도록 적용한다.
 */

interface Props {
  themeName: ThemeName;
}

/**
 * TODO: createGlobalStyle<Props> 동작 방식, 왜 이렇게 만들어졌는가?
 */
export const GlobalStyle = createGlobalStyle<Props>`
    body {
        padding: 0;
        maring: 0;
        background-color: ${(props) =>
          props.themeName === "light" ? "white" : "black"}
    }

    h1 {
        margin: 0;
    }

    * {
        color: ${(props) => (props.themeName === "light" ? "black" : "white")}
    }
`;
