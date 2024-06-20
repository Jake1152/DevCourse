import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // toHaveStyle, toBeInTheDocument matcher를 사용하기 위해 추가
import Title from "./Title";
import { BookStoreThemeProvider } from "../../context/themeContext";

describe("Title 컴포넌트 테스트", () => {
  it("renders with correct styles", () => {
    const { container } = render(
      <BookStoreThemeProvider>
        <Title size="large">제목</Title>
      </BookStoreThemeProvider>
    );
    expect(container?.firstChild).toHaveStyle({ fontSize: "2rem" });
  });

  it("renders with correct color", () => {
    const { container } = render(
      <BookStoreThemeProvider>
        <Title size="large" color="primary">
          제목
        </Title>
      </BookStoreThemeProvider>
    );
    expect(container?.firstChild).toHaveStyle({ color: "brown" });
  });

  it("should be in the document", () => {
    render(
      <BookStoreThemeProvider>
        <Title size="large">제목</Title>
      </BookStoreThemeProvider>
    );
    expect(screen.getByText("제목")).toBeInTheDocument();
  });
});

/**

import { render, screen } from "@testing-library/react";
import Title from "./Title";
import { BookStoreThemeProvider } from "../../context/themeContext";

describe("Title 컴포넌트 테스트", () => {
  it("랜더를 확인", () => {
    // 1. 랜더
    render(
      <BookStoreThemeProvider>
        <Title size="large">제목</Title>
      </BookStoreThemeProvider>
    );
    // 2. 확인
    // expect;
    expect(screen.getByText("제목")).toBeInTheDocument();
  });

  // it("size props 적용", () => {
  //   const { container } = render(
  //     <BookStoreThemeProvider>
  //       <Title size="large"> 제목 </Title>
  //     </BookStoreThemeProvider>
  //   );
  //   expect(container?.firstChild).toHaveStyle({ fontSize: "2rem" });
  // });
  // it("color props 적용", () => {
  //   const { container } = render(
  //     <BookStoreThemeProvider>
  //       <Title size="large" color="primary">
  //         제목
  //       </Title>
  //     </BookStoreThemeProvider>
  //   );
  //   expect(container?.firstChild).toHaveStyle({ color: "brown" });
  // });
});
*/
