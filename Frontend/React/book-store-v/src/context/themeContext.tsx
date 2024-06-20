/**
 * tsx로 생성하는 이유는 추후에 provider를 옮겨올 예정이라서 그러하다.
 */
// import { createContext, useEffect } from "react";
import React, { ReactNode, createContext, useState, useEffect } from "react";
import { ThemeName } from "../style/theme";
import { GlobalStyle } from "../style/global";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../style/theme";

const DEFAULT_THEME_NAME = "dark";
const THEME_LOCAL_STORAGE_KEY = "book_store_theme";

interface State {
  themeName: ThemeName;
  toggleTheme: () => void;
}

/**
 * 테마 초기값을 변경하는 방법
 */
export const state = {
  themeName: DEFAULT_THEME_NAME as ThemeName,
  toggleTheme: () => {},
};

// export const ThemeContext = createContext<ThemeName>("light");
export const ThemeContext = createContext<State>(state);

/**
 * 토글동작하도록 변경
 * 프로바이더를 새로 작성하여 감싼다
 *
 * children은 감싸기 위한 어떤 context라고 한다.
 */
export const BookStoreThemeProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [themeName, setThemeName] = useState<ThemeName>(DEFAULT_THEME_NAME);

  const toggleTheme = () => {
    setThemeName(themeName === "light" ? "dark" : "light");
    localStorage.setItem(
      THEME_LOCAL_STORAGE_KEY,
      themeName === "light" ? "dark" : "light"
    );
  };

  // 기본값 받아오기
  useEffect(() => {
    const savedThemeName = localStorage.getItem(
      THEME_LOCAL_STORAGE_KEY
    ) as ThemeName;

    setThemeName(savedThemeName || DEFAULT_THEME_NAME);
  }, []);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={getTheme(themeName)}>
        <GlobalStyle themeName={themeName} />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

/**
 * 기존에 스타일 컴포넌트로 만든 ThemeProvider와 Global 테마 역시 타마의 한 부분
 * App.tsx에서 이쪽으로 옮긴다.
 */
