<template>
  <Layout>
    <div class="columns">
      <div class="column is-one-third">
        <g-link to="/">&#8592; Terug naar startpagina</g-link>
      </div>
      <div class="column">
        <h1 class="page__title">{{ $static.main.title }}</h1>
      </div>
    </div>
    <div class="columns">
      <div class="column is-one-third">
        <ow-social-share />
      </div>
      <div class="column ow-page-body" v-html="$static.main.content"></div>
    </div>
  </Layout>
</template>

<script>
import OwSocialShare from "~/components/OwSocialShare.vue";
export default {
  metaInfo() {
    return {
    title: this.$static.main.title,
    }
  },
  components: {
    OwSocialShare
  }
};
</script>

<style lang="scss">
.ow-page-body {
  p:first-child {
    margin-top: 0;
  }
}
</style>

<static-query>
query {
  main(id: "e6074c9c16a8e5e755ca34211b138407") {
    title
    content
  }
}
</static-query>