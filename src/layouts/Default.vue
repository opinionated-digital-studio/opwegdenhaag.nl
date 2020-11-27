<template>
  <div class="layout">
    <TheHeader />
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

<style lang="scss">
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
}

h1 {
  margin-top: 0;
  font-size: 3.052rem;
}

h2 {
  font-size: 2.441rem;
}

h3 {
  font-size: 1.953rem;
}

h4 {
  font-size: 1.563rem;
}

h5 {
  font-size: 1.25rem;
}

small,
.text_small {
  font-size: 0.8rem;
}

@include desktop() {
  html {
    font-size: 125%;
  } /*20px*/

  body {
    background: white;
    line-height: 1.6;
    color: #000000;
  }

  p {
    margin-bottom: 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 3rem 0 1.38rem;
    line-height: 1.3;
  }

  h1 {
    margin-top: 0;
    font-size: 3.052rem;
  }

  h2 {
    font-size: 2.441rem;
  }

  h3 {
    font-size: 1.953rem;
  }

  h4 {
    font-size: 1.563rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  small,
  .text_small {
    font-size: 0.8rem;
  }
}
</style>

<script>
import TheHeader from "~/components/TheHeader";
export default {
  components: { TheHeader },
};
</script>