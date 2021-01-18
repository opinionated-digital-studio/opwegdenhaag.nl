<template>
  <Layout>
    <div class="columns">
      <div class="column is-one-third">
        <g-link to="/">&#8592; Terug naar startpagina</g-link>
      </div>
      <div class="column">
        <h1 class="page__title">Pagina niet gevonden</h1>
      </div>
    </div>
    <div class="columns">
      <div class="column is-offset-one-third ow-page-body">De pagina die je zoekt kan niet worden gevonden. Dit kan omdat de pagina niet (meer) bestaat of omdat er een
        typefout is gemaakt bij het invoeren van het adres.
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
    title: 'Sorry, deze pagina is niet beschikbaar',
    }
  }
};
</script>