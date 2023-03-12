<script>
  import Switch from "./lib/components/Switch.svelte";
  import { theme, THEMES, toggleTheme } from "./lib/store/theme";
</script>

<main>
  <Switch checked={$theme === THEMES.DARK} handleChange={toggleTheme} />
  <h1>Hello.</h1>
  <h2>Theme {$theme} is active.</h2>
  <p>Some text</p>
</main>

<style>
  p {
    color: var(--accent-color);
  }
</style>
