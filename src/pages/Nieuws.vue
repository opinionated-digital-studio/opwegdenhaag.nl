<template>
  <Layout>
    <div class="columns">
      <div class="column is-one-third">
        <g-link to="/">&#8592; Terug naar startpagina</g-link>
      </div>
      <div class="column">
        <h1 class="page__title">Nieuws</h1>
      </div>
    </div>
    <div class="columns">
      <div class="column is-one-third">
        <p>
          In deze rubriek vind je de laatste nieuwsberichten over het
          Maatjesproject Op Weg en informatie over allerlei zaken die te maken
          hebben met de zorg voor mensen die een eerste psychose hebben gehad.
        </p>
      </div>
      <div class="column">
        <div class="ow-news-list">
          <ow-news-list :content="$page.posts.edges" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import OwNewsList from "../components/OwNewsList.vue";
export default {
  components: {
    OwNewsList
  },
  metaInfo() {
    return {
      title: "Nieuws"
    };
  }
};
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
