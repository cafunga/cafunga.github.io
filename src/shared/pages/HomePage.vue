<template>
  <Header />
  <Slide />
  <div class="description">
    <p>Ventas de ropa, accesorios y artículos para el
       hogar,todos diseñados y confeccionados en Cuba, 100% artesanales
    </p>
  </div>
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
.description{
  background-color: rgb(223,188,93);
  width: 100vw;
  height: 20vh;
  padding: 0 1em;
  box-sizing: border-box;
  
  display: flex;
  justify-content: center;
  align-items: center;

  color:#112031;
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;

  animation: entrada 0.4s ease-in
}

@keyframes entrada {
  from 
  {
    transform: translateX(100%)
  }
}

</style>
