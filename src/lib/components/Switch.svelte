<script>
  export let checked = false;
  export let handleChange = () => {};
</script>

<div class="container">
  <input
    id="checkbox"
    class="checkbox"
    type="checkbox"
    bind:checked
    on:change={handleChange}
  />
  <label for="checkbox">
    <i class="fas fa-moon" />
    <i class="fas fa-sun" />
    <div class="ball" />
  </label>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }

  .checkbox {
    opacity: 0;
    position: absolute;
  }

  label {
    cursor: pointer;
    width: 52px;
    height: 19px;
    background-color: #111;
    display: flex;
    border-radius: 50px;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    position: relative;
  }

  .ball {
    width: 25px;
    height: 25px;
    background-color: white;
    position: absolute;
    top: 2px;
    left: 3px;
    border-radius: 50%;
  }

  .checkbox:checked + label .ball {
    transform: translateX(30px);
  }

  .fa-moon {
    color: pink;
    font-size: 20px;
  }

  .fa-sun {
    color: yellow;
    font-size: 20px;
  }
</style>
