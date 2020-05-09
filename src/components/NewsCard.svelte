<script>
  export let img;
  export let title;
  export let subhead;
  export let href;
</script>

<style>
  .card {
    width: 208px;
    height: 288px;
    margin: 16px;
    padding: 16px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);
    background-color: #5c5c5c;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: #ffffff;
    font-size: 24px;
    font-weight: 600;
    text-decoration: none;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.6);
    transition: all 200ms;
  }

  .card:first-child {
    margin-left: 0;
  }

  .card:last-child {
    margin-right: 0;
  }

  .card:hover,
  .card:focus {
    background-blend-mode: multiply;
  }

  .card:hover .link-title,
  .card:focus .link-title {
    color: #ff9900;
    font-size: 16px;
  }

  .card .link-title {
    font-size: 0;
    font-weight: normal;
    text-shadow: none;
    transition: all 200ms;
  }
</style>

<a
  class="card"
  style="background-image: linear-gradient(0deg, #5c5c5c 0%, transparent 60%),
  url({img});"
  {href}>
  <div>{title}</div>
  <div class="link-title">{subhead}</div>
</a>
