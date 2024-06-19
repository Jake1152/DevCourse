// [14주차-Day3]컴포넌트 및 상태 정보 관리 프로젝트
import { createGlobalStyle } from "styled-components";
import "sanitize.css";

/** GlobalStyle
 * GlobalStyle은 하위에 어떤 스타일을 포함할 수 있다.
 */
export const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        maring: 0;
    }

    h1 {
        margin: 0;
    }
`;
