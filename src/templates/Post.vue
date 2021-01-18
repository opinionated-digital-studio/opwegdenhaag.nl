<template>
  <Layout>
    <div class="columns">
      <div class="column is-one-third">
        <g-link to="/nieuws">&#8592; Terug naar nieuws</g-link>
      </div>
      <div class="column">
        <h1 class="page__title" v-html="$page.post.title" />
      </div>
    </div>
    <div class="columns">
      <div class="column is-one-third">
        <ow-social-share/>
      </div>
      <div class="column">
        <div class="ow-page-body">
          <p class="ow-page__date">Geplaatst op {{formatDate}}</p>
          <div v-html="$page.post.content"></div>
        </div>
      </div>
    </div>
    <div>
    </div>
  </Layout>
</template>

<script>
import OwSocialShare from '~/components/OwSocialShare.vue'
import { format } from "date-fns";
import { nl } from "date-fns/locale";

export default {
  components: { OwSocialShare },
  metaInfo() {
    return {
    title: this.$page.post.title,
    }
  },
  computed: {
    formatDate: function() {
      if (this.$page.post.date) {
        const date = format(new Date(this.$page.post.date), "d MMMM yyyy", { locale: nl });
        return date
      }
    }
  }
}
</script>

<page-query>
query ($id: ID!) {
  post(id: $id) {
    title
    content
    date
  }
}
</page-query>

<style lang="scss">
  .ow-page {
    &__date {
      margin-top: 0rem;
      margin-bottom: 3rem;

      @include fullhd() {
        margin-bottom: 4rem;
      }
    }
  }
</style>