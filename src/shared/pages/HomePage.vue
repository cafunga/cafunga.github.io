<template>
  <Header />
  <Slide />
  <Boton />
  <Catalogo />
  <Footer />
</template>

<script>
import Header from '@/shared/components/Header.vue'
import Footer from '@/shared/components/Footer.vue'
import Catalogo from '@/components/Catalogo.vue'
import Slide from '@/components/Slide.vue'
import Boton from '@/components/Boton'

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Catalogo,
    Slide,
    Boton,
  },
};
</script>

<style scoped>
Header {
  margin: 0px;
}


</style>