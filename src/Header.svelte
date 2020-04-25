<style>
  header {
    background-color: #FF9900;
    padding: 24px 64px;
    display: flex;
  }

  img {
    width: 96px;
    height: 78px;
    filter: grayscale(100%) brightness(150%) contrast(150%);
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
  }

  #search select {
    border: none;
    outline: none;
    appearance: none;
    border-radius: 2px 0 0 2px;
    background-color: #dddddd;
    height: 100%;
    /* TODO: Width should be just enough to fit content */
  }

  #search input {
    border: none;
    outline: none;
    height: 100%;
    flex: 1;
  }

  #search button {
    border: none;
    background-color: #ffffff;
    height: 100%;
  }
</style>

<header>
  <!-- TODO see how this will turn out after build -->
  <img src="assets/images/logo-compact.png" alt={"Amazon logo"} />
  <div class="center">
    <div id="search">
      <select id="search-section">
        <!-- TODO: create short and long names, showing only short for current -->
        <option>All Departments</option>
        <option>Books</option>
        <option>Under $10</option>
        <option>Smart Home</option>
        <option>Whole Foods Market</option>
      </select>

      <input />

      <!-- TODO: Use icon -->
      <button>Search</button>
    </div>
  </div>
</header>