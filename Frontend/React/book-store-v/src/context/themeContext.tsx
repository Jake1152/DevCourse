/**
 * tsx로 생성하는 이유는 추후에 provider를 옮겨올 예정이라서 그러하다.
 */
import { createContext } from "react";
import { ThemeName } from "../style/theme";
import { useState } from "react";
import { GlobalStyle } from "../style/global";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../style/theme";

interface State {
  themeName: ThemeName;
  toggleTheme: () => {};
}

/**
 * 테마 초기값을 변경하는 방법
 */

export const state = {
  themeName: "light" as ThemeName,
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
  chidren: ReactNode;
}) => {
  const [themeName, setThemeName] = useState<State>(state);

  const toggleTheme = () => {
    setThemeName(themeName === "light" ? "dark" : "light");
  };

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
