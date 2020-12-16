<template>
  <Layout>
    <div class="columns">
      <div class="column is-one-third">
        <g-link to="/nieuws">&#8592; Terug naar nieuws</g-link>
      </div>
      <div class="column">
        <h1 v-html="$page.post.title" />
      </div>
    </div>
    <div class="columns">
      <div class="column is-one-third">
        <ow-social-share/>
      </div>
      <div class="column ow-page-body" v-html="$page.post.content" />
    </div>
    <div>
    </div>
  </Layout>
</template>

<script>
import OwSocialShare from '~/components/OwSocialShare.vue'
export default {
  components: { OwSocialShare },
}
</script>

<page-query>
query ($id: ID!) {
  post(id: $id) {
    title
    content
  }
}
</page-query>