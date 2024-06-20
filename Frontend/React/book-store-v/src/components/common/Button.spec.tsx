import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // toHaveStyle, toBeInTheDocument matcher를 사용하기 위해 추가
import Button from "./Button";
import { BookStoreThemeProvider } from "../../context/themeContext";

describe("Title 컴포넌트 테스트", () => {
  it("renders with correct styles", () => {
    // 1. 랜더
    render(
      <BookStoreThemeProvider>
        <Button size="large" scheme="normal">
          버튼
        </Button>
      </BookStoreThemeProvider>
    );

    // 2. 확인
    expect(screen.getByText("버튼")).toBeInTheDocument();
  });

  it("size props 적용", () => {
    // 1. 랜더
    // const { container } =
    render(
      <BookStoreThemeProvider>
        <Button size="large" scheme="primary">
          버튼
        </Button>
      </BookStoreThemeProvider>
    );

    // 2. 확인
    // expect(container?.firstChild).toHaveStyle({ fontSize: "1.5rem" });
    expect(screen.getByRole("button")).toHaveStyle({ fontSize: "1.5rem" });
  });
});
