<script>
  import Icon from 'svelte-awesome';
  import { search, mapMarker } from 'svelte-awesome/icons';
  import CartLink from './components/CartLink.svelte';
</script>

<style type="scss">
  header {
    background-color: #303030;
    background: linear-gradient(0deg, #303030 50%, #3a3a3a 100%);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    padding: 24px 64px 16px 64px;
    display: flex;
    width: calc(100% - 128px);

    #skip-nav {
      position: absolute;
      top: 10px;
      background-color: #fafafa;
      padding: 6px 8px;
      border-radius: 4px;

      &:not(:focus) {
        z-index: -1;
      }
    }
  }

  .homepage-link {
    margin-right: 48px;

    .logo {
      width: 96px;
      height: 78px;
    }
  }

  .center {
    flex: 1;

    #search {
      background-color: #ffffff;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
      border-radius: 4px;
      height: 40px;
      width: 100%;
      display: inline-flex;

      select {
        border: none;
        appearance: none;
        padding: 0 36px 0 12px;
        border-radius: 4px 0 0 4px;
        background-color: #dddddd;
        height: 40px;
      }

      .select-arrow {
        top: 0;
        width: 0;
        height: 0;
        border: 4px solid transparent;
        border-top: 4px solid #000000;
        margin: 18px 16px 0 -20px;
      }

      input {
        border: none;
        height: 100%;
        flex: 1;
      }

      button.search {
        border: none;
        background-color: transparent;
        height: 100%;
        padding: 0 12px;

        &:focus {
          box-shadow: 0 0 0 2px orange, 0 0 0 3px white;
        }
      }
    }

    .section-links {
      color: #ffffff;
      margin-top: 16px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .delivery {
        display: flex;
        flex-direction: row;
        align-items: center;
        color: #ffffff;
        background: none;
        border: none;
        margin: 0;
        padding: 0;
        text-align: left;
        cursor: pointer;
        margin: -4px -4px -4px -8px;
        padding: 4px 8px;

        &:hover {
          padding: 3px 7px;
          border: 1px solid #ffffff;
        }

        .info {
          margin-left: 8px;

          .recipient {
            font-size: 12px;
          }

          .location {
            font-size: 16px;
            font-weight: 600;
          }
        }
      }

      .section-link {
        text-decoration: none;
        color: #ffffff;
        padding: 6px;
        margin: 0 4px;
        border-radius: 4px;

        &:hover {
          border: 1px solid #ffffff;
          padding: 5px;
        }
      }
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
  <a id="skip-nav" href="#main-content">Skip to main content</a>
  <a class="homepage-link" href="/">
    <img
      class="logo"
      src="assets/images/logo-compact-light.png"
      alt="Amazon logo" />
  </a>
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
      <!-- TODO: Clicking arrow prevents dropdown from opening -->
      <div class="select-arrow" />

      <input />

      <button class="search">
        <Icon data={search} />
      </button>
    </div>
    <div class="section-links">
      <button class="delivery">
        <Icon data={mapMarker} scale={1.8} class="icon" />
        <div class="info">
          <div class="recipient">Deliver to John</div>
          <div class="location">Seattle 98101</div>
        </div>
      </button>

      <a class="section-link" href="#best-sellers">Best Sellers</a>
      <a class="section-link" href="#new-releases">New Releases</a>
      <a class="section-link" href="#todays-deals">Today's Deals</a>
      <a class="section-link" href="#coupons">Coupons</a>
      <a class="section-link" href="#help">Help</a>
    </div>
  </div>
  <div class="options">
    <CartLink />
    <a href="#signin">Sign In</a>
  </div>
</header>
