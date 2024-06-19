import { createGlobalStyle } from "styled-components";
import "sanitize.css";

/** GlobalStyle
 * GlobalStyle은 하위에 어떤 스타일을 포함할 수 있다.
 *
 * h1 tag등에 margin이 있으면 간혹가다가 의도하지 않은 레아이웃 깨짐이 있는 경우가 있다고 한다.
 */
export const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
    }

    h1 {
        margin: 0;
    }
`;
