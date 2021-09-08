<template>
  <Header />
  <Slide />
  <Boton />
  <div class="catalogos"></div>
  <Catalogo />
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Catalogo from "./components/Catalogo.vue";
import Slide from "./components/Slide.vue";
import Boton from "./components/Boton.vue";

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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fdfce0;
  width: 100%;
}

Header {
  margin: 0px;
}

.catalogos {
  width: 100%;
  height: 7vh;
  margin: 0px;
  background-color: #fdfce0;
  background-image: url(https://imgur.com/w9XqNC2.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 40vw auto;
}
</style>
