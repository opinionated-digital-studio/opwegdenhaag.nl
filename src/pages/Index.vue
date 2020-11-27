<template>
  <Layout :header-style="headerStyle" >
    <ow-jumbotron />
  </Layout>
</template>

<script>
import OwJumbotron from "~/components/OwJumbotron.vue";
export default {
  metaInfo: {
    title: "Startpagina",
  },
  components: { OwJumbotron },
  data() {
    return {
      headerStyle: 'primary'
    }
  }
};
</script>

<style lang="scss" scoped>
</style>