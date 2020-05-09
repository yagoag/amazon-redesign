<script>
  import Header from './Header.svelte';
  import NewsCard from './components/NewsCard.svelte';
</script>

<style>
  a.hero {
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    background-image: linear-gradient(0deg, transparent 0%, #bbcae9 100%);
    background-repeat: no-repeat;
    padding: 24px 0 16px 0;
  }

  .hero .text {
    text-align: right;
    margin-right: -96px;
  }
  .hero .text p {
    font-size: 20px;
    font-weight: 600;
    color: #3363cd;
    margin: 6px 0;
  }

  .hero .text p.small {
    font-size: 16px;
    font-weight: normal;
    color: #1a3166;
  }

  .hero img {
    /* width: 100%; */
    width: 100%;
    max-width: 400px;
    height: auto;
  }

  .content {
    padding: 0 64px;
  }

  .news {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .horizontal-card {
    height: 320px;
    margin: 20px 0;
  }

  .horizontal-card .title {
    font-size: 24px;
    font-weight: 500;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    margin: 0 0 16px 0;
  }

  .horizontal-card .books {
    display: inline-block;
    height: 200px;
    overflow: hidden;
  }

  .horizontal-card .books .book-cover {
    height: 200px;
    width: auto;
  }
</style>

<main>
  <Header />

  <a class="hero" href="#buy-prime">
    <div class="text">
      <p>There's a lot to watch on Prime Video</p>
      <p class="small">Included with Prime</p>
    </div>
    <img
      src="/assets/images/rafiki-movie-night.svg"
      alt="couple on a couch eating popcorn" />
  </a>

  <div class="content">
    <div class="news">
      <NewsCard
        img="https://images.pexels.com/photos/4057728/pexels-photo-4057728.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=320&w=240"
        title="Get fit at home"
        subhead="Explore Now"
        href="#fit-at-home" />
      <NewsCard
        img="https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=320&w=240"
        title="Our Summer playlist is out"
        subhead="Listen on Amazon Music"
        href="#playlist" />
      <NewsCard
        img="https://images.pexels.com/photos/2647753/pexels-photo-2647753.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=320&w=240"
        title="Freedom of expression in our workplace"
        subhead="Learn more"
        href="#freedom" />
      <NewsCard
        img="https://images.pexels.com/photos/3843273/pexels-photo-3843273.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=320&w=240"
        title="New release on Prime Video"
        subhead="Check it out"
        href="#prime-video-release" />
    </div>

    <div class="horizontal-card">
      <h4 class="title">Best sellers in Kindle eBooks</h4>
      <div class="books">
        <img
          class="book-cover"
          src="https://images-na.ssl-images-amazon.com/images/I/91tK-LBCGML._AC_SY400_.jpg"
          alt="Don't Make A Sound by T.R. Ragan" />
        <img
          class="book-cover"
          src="https://images-na.ssl-images-amazon.com/images/I/81QSPx4xxRL._AC_SY400_.jpg"
          alt="Legacy Of Lies by Robert Bailey" />
        <img
          class="book-cover"
          src="https://images-na.ssl-images-amazon.com/images/I/81YarSHhRbL._AC_SY400_.jpg"
          alt="Sorry I Missed You by Suzy Krause" />
        <img
          class="book-cover"
          src="https://images-na.ssl-images-amazon.com/images/I/91vXZFo4EpL._AC_SY400_.jpg"
          alt="Your Blue Is Not My Blue by Aspen Matis" />
        <img
          class="book-cover"
          src="https://images-na.ssl-images-amazon.com/images/I/81n1G6Cp7wL._AC_SY400_.jpg"
          alt="The Bad Seed by Jory John" />
        <img
          class="book-cover"
          src="https://images-na.ssl-images-amazon.com/images/I/51eAMQG-GkL._AC_SY200_.jpg"
          alt="The Girl Who Lived by Christopher Greyson" />
      </div>
    </div>
  </div>
</main>
