import { get, writable } from "svelte/store";

export const THEMES = {
  LIGHT: "1",
  DARK: "2",
};

const THEME_KEY = "theme";

let storedTheme =
  (typeof window !== "undefined" && localStorage.getItem(THEME_KEY)) ||
  THEMES.LIGHT;

export const theme = writable(storedTheme);
theme.subscribe((value) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(THEME_KEY, value.toString());
    window.document.body.className = `theme-${value}`;
  }
});

export const toggleTheme = () => {
  theme.set(get(theme) === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
};
