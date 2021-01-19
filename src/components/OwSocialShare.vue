<template>
  <div>
    <span>Deel dit artikel op:</span>
    <ul class="ow-socials-share">
      <li class="ow-socials-share__item">
        <a class="ow-socials-share__link" href="/">Facebook</a>
      </li>
      <li class="ow-socials-share__item">
        <a class="ow-socials-share__link" href="/">LinkedIn</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "OwSocialShare",
  data() {
    return {
      test: this.$route
    }
  }
};
</script>

<style lang="css">
  .ow-socials-share {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>