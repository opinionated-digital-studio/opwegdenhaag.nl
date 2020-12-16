<template>
  <Layout>
    <div class="columns">
      <div class="column is-one-third">
        <g-link to="/">&#8592; Terug naar startpagina</g-link>
      </div>
      <div class="column">
        <h1>Nieuws</h1>
      </div>
    </div>
    <div class="columns">
      <div class="column is-one-third">
        <p>
          Mauris sit amet consequat risus, non facilisis nisi. Mauris egestas
          libero quis ex fermentum, non placerat nibh vehicula. Pellentesque
          iaculis hendrerit fringilla.
        </p>
      </div>
      <div class="column">
        <div class="ow-news-list">
          <ow-news-list :content="$page.posts.edges"/>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import OwNewsList from '../components/OwNewsList.vue'
export default {
  components: {
    OwNewsList
  }
}
</script>

<page-query>
query {
  posts: allPost {
    edges {
      node {
        id
        title
        path
        date
      }
    }
  }
}

</page-query>