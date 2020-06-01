<script>
  import Icon from 'svelte-awesome';
  import { angleLeft, angleRight } from 'svelte-awesome/icons';

  export let cards;

  let carousel;
</script>

<style type="scss">
  .card-carousel {
    display: inline-block;
    overflow: auto;
    white-space: nowrap;
    width: calc(100vw - 48px);

    @media screen and (min-width: 1000px) {
      width: calc(100vw - 128px);
    }
  }
</style>

<div class="card-carousel" bind:this={carousel}>
  <!-- TODO: add previous/next page buttons which scroll the container accordingly -->
  <!-- <button class="arrow left">
    <Icon data={angleLeft} scale="2.5" />
  </button> -->
  <!-- TODO: try {@html ...} to see if it could be a better fit for this -->
  <slot />
  <!-- <button class="arrow right">
    <Icon data={angleRight} scale="2.5" />
  </button> -->
</div>
