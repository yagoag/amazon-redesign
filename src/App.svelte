<script>
  import { onMount } from 'svelte';
  import api from './api';
  import Header from './Header.svelte';
  import NewsCard from './components/NewsCard.svelte';
  import CardCarousel from './components/CardCarousel.svelte';

  let newsList;
  let books;

  onMount(async () => {
    api.get('/news').then((data) => (newsList = data));
    api.get('/books').then((data) => (books = data));
  });
</script>

<style type="scss">
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero {
    background-image: linear-gradient(0deg, transparent 0%, #bbcae9 100%);
    background-repeat: no-repeat;
    padding: 24px 0 16px 0;
    width: 100%;
    display: flex;
    justify-content: center;

    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      text-decoration: none;
    }

    .text {
      text-align: right;
      margin-right: -96px;

      p {
        font-size: 20px;
        font-weight: 600;
        color: #3363cd;
        margin: 6px 0;
      }

      p.small {
        font-size: 16px;
        font-weight: normal;
        color: #1a3166;
      }
    }

    img {
      width: 100%;
      max-width: 400px;
      height: auto;
    }
  }

  .content {
    padding: 0 24px;
    max-width: 1500px;

    @media screen and (min-width: 1000px) {
      padding: 0 64px;
    }
  }

  .news {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .horizontal-card {
    height: 320px;
    margin: 20px 0;

    .title {
      font-size: 24px;
      font-weight: 500;
      text-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
      margin: 0 0 16px 0;
    }

    .book-cover {
      height: 200px;
      width: auto;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);

      &:not(:last-child) {
        margin-right: 16px;
      }
    }
  }
</style>

<Header />

<main id="main-content">
  <div class="hero">
    <a href="#buy-prime">
      <div class="text">
        <p>There's a lot to watch on Prime Video</p>
        <p class="small">Included with Prime</p>
      </div>
      <img
        src="/assets/images/rafiki-movie-night.svg"
        alt="couple on a couch eating popcorn" />
    </a>
  </div>

  <div class="content">
    <div class="news">
      {#if newsList}
        {#each newsList as news}
          <NewsCard {...news} />
        {/each}
        <!-- TODO: else show a loading skeleton -->
      {/if}
    </div>

    <div class="horizontal-card">
      <h4 class="title">Best sellers in Kindle eBooks</h4>
      <CardCarousel>
        {#if books}
          {#each books as book}
            <img class="book-cover" src={book.cover} alt={book.title} />
          {/each}
          <!-- TODO: else show a loading skeleton -->
        {/if}
      </CardCarousel>
    </div>
  </div>
</main>
