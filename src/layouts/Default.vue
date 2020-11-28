<template>
  <div class="layout">
    <the-header :header-style="headerStyle" />
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import TheHeader from "~/components/TheHeader";
export default {
  components: { TheHeader },
  props: {
    headerStyle: {
      type: String, required: false, default: 'white'
    }
  }
};
</script>

<style lang="scss">
.ow-container {
  max-width: 2160px;
  margin: 0 auto;
  padding: 0 6%;
}
html {
  font-size: 112.5%;
} /*18px*/

body {
  background: white;
  font-weight: 400;
  line-height: 1.6;
  color: #000000;
  font-family: $font-body;
}

p {
  margin-bottom: 1rem;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: $font-headers;
  margin: 3rem 0 1.38rem;
  font-weight: 900;
  line-height: 1.3;
  color: $primary-color;
}

h1,
.h1 {
  margin-top: 0;
  font-size: 3.052rem;
}

h2,
.h2 {
  font-size: 2.441rem;
}

h3,
.h3 {
  font-size: 1.953rem;
}

h4,
.h4 {
  font-size: 1.563rem;
}

h5,
.h5 {
  font-size: 1.25rem;
}

small,
.text_small {
  font-size: 0.8rem;
}

@include desktop() {
  html {
    font-size: 137.5%;
  } /*22px*/
}

a {
  text-decoration: none;
  display: inline-block;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    background-color: $black;
    height: 1px;
    width: 100%;
    bottom: 0;
    left: 0;
  }
}

.ow-type {
  &__p {
    &--lead {
      @extend h4;
      font-weight: 700;
      margin-top: 0;
    }
  }
}
</style>