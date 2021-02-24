<template>
  <div class="skiplink">
    <a href="#main">Naar hoofdinhoud</a>
  </div>
</template>

<style lang="scss">
.skiplink {
  z-index: 10000000;
}

.skiplink a {
  position: absolute;
  overflow: hidden;
  height: 1px;
  width: 1px;
  display: block;
  text-align: center;
  white-space: nowrap;
}

.skiplink a:focus {
  position: static;
  width: auto;
  height: auto;
  clip: auto;
}
</style>

<script>
export default {
  name: "TheSkipLink"
};
</script>
