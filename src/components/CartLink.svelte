<script>
  import Icon from 'svelte-awesome';
  import { shoppingCart } from 'svelte-awesome/icons';
</script>

<style type="scss">
  a.cart {
    color: #ffffff;
    font-weight: 600;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;

    > .cart-items {
      color: #ff9900;
      height: 32px;
      margin-right: 6px;

      .cart-items-number {
        margin-top: -34px;
        margin-left: 6px;
        text-align: center;
        color: #303030;
        font-weight: bold;
        font-size: 16px;
      }
    }
  }
</style>

<a class="cart" href="#cart">
  <div class="cart-items">
    <Icon data={shoppingCart} scale={2} />
    <div class="cart-items-number">0</div>
  </div>
  Cart
</a>
<!-- TODO: show cart content on hover/focus -->
