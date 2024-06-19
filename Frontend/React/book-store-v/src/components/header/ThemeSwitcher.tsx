import { ThemeName } from "../../style/theme";

/**
 * toggle기능 추가
 * light, dark
 */

interface Props {
  themeName: ThemeName;
  setThemeName: (themeName: ThemeName) => void;
}

function ThemeSwitcher({ themeName, setThemeName }: Props) {
  // const toggleTheme = () => {
  //   if (themeName === "light") {
  //     setThemeName("dark");
  //     return;
  //   }
  // };
  const toggleTheme = () => {
    setThemeName(themeName === "light" ? "dark" : "light");
  };

  return <button onClick={toggleTheme}>{themeName}</button>;
}

export default ThemeSwitcher;
