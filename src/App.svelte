<script>
  import Header from './Header.svelte';
  import NewsCard from './components/NewsCard.svelte';
</script>

<style>
  .hero {
    max-height: 200px;
  }

  .hero img {
    width: 100%;
  }

  .content {
    margin: 0 64px;
  }

  .news {
    display: flex;
    flex-direction: row;
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
  <div class="hero">
    <img
      src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2019/Other/RB-1424_AcquisitionHolidayAssets/GW_DesktopHero_RB-1424_PV-AcquisitionHolidayAssets_3000x1200._CB451871227_.jpg"
      alt="So much to watch, included with Prime" />
  </div>

  <div class="content">
    <div class="news">
      <NewsCard
        img="https://images-na.ssl-images-amazon.com/images/G/01/Anything/test/images/detail/Gateway_graphics/covid_safety_G_2X._SY608_CB433132410_.jpg"
        title="How we’re taking care of employees"
        subhead="Learn more at blog.aboutamazon.com"
        href="#employee-care" />
      <NewsCard
        img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/WeeklyBuild/042420/042420_SamDemiAtHome_GWDesktop_SingleImageCard_758x608._SY608_CB433303538_.jpg"
        title="Sam and Demi - at home playlist"
        subhead="Listen on Amazon Music"
        href="#playlist" />
      <NewsCard
        img="https://images-na.ssl-images-amazon.com/images/G/01/Gateway/COVID19/donation_COVID_desktop_2x._SY608_CB420065185_.jpg"
        title="Donate to COVID-19 response"
        subhead="Learn more"
        href="#donate" />
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
