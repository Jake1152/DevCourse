/**
 * tsx로 생성하는 이유는 추후에 provider를 옮겨올 예정이라서 그러하다.
 */
import { createContext } from "react";
import { ThemeName } from "../style/theme";

interface State {
  themeName: ThemeName;
  setThemeName: (themeName: ThemeName) => {};
}

/**
 * 테마 초기값을 변경하는 방법
 */

export const state = {
  themeName: "light" as ThemeName,
  setThemeName: (themeName: ThemeName) => {},
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
  return (
    <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
  );
};
