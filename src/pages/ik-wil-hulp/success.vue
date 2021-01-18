<template>
  <Layout>
    <div class="columns">
      <div class="column is-one-third">
        <g-link to="/">&#8592; Terug naar startpagina</g-link>
      </div>
      <div class="column">
        <h1 class="page__title">Aanmelding voltooid</h1>
      </div>
    </div>
    <div class="columns">
      <div class="column is-offset-one-third ow-page-body">
        <p>Jouw aanmelding is voltooid en is bij ons binnengekomen. Binnenkort nemen wij telefonisch of per e-mail contact met je op.</p>
        <p>Je kan deze pagina veilig verlaten.</p>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
    title: 'Aanmelding voltooid',
    }
  }
};
</script>