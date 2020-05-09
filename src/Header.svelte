<script>
  import Icon from 'svelte-awesome';
  import { search } from 'svelte-awesome/icons';
  import CartLink from './components/CartLink.svelte';
</script>

<style type="scss">
  header {
    background-color: #303030;
    background: linear-gradient(0deg, #303030 50%, #3a3a3a 100%);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    padding: 24px 64px;
    display: flex;
  }

  img {
    width: 96px;
    height: 78px;
    filter: contrast(150%);
    margin-right: 48px;
  }

  .center {
    flex: 1;
  }

  #search {
    background-color: #ffffff;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    border-radius: 2px;
    height: 40px;
    width: 100%;
    display: inline-flex;

    select {
      border: none;
      outline: none;
      /* appearance: none; */
      border-radius: 2px 0 0 2px;
      background-color: #dddddd;
      height: 100%;
      /* TODO: Width should be just enough to fit content */
    }

    input {
      border: none;
      outline: none;
      height: 100%;
      flex: 1;
    }

    button {
      border: none;
      background-color: #ffffff;
      height: 100%;
      padding-right: 12px;
    }
  }

  .options {
    margin: 0 0 40px 32px;
    display: flex;
    align-items: center;

    a {
      color: #ffffff;
      text-decoration: none;
      font-weight: 600;
      margin-left: 16px;
    }
  }
</style>

<header>
  <img src="assets/images/logo-compact.png" alt="Amazon logo" />
  <div class="center">
    <div id="search">
      <select id="search-section">
        <!-- TODO: create short and long names, showing only short for current -->
        <option>All</option>
        <option>Books</option>
        <option>Under $10</option>
        <option>Smart Home</option>
        <option>Whole Foods</option>
      </select>

      <input />

      <button>
        <Icon data={search} />
      </button>
    </div>
  </div>
  <div class="options">
    <CartLink />
    <a href="#signin">Sign In</a>
  </div>
</header>
