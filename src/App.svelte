<script>
  import Header from './Header.svelte';
  import { Router, Route } from 'svelte-routing';
  import Home from './pages/Home.svelte';
  import Product from './pages/Product.svelte';

  export let url = '';
</script>

<Header />
<Router {url}>
  <Route path="/product/:id" component={Product} />
  <Route path="/" component={Home} />
</Router>
