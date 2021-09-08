<template>
  <div class="presentacion">
    <div class="contenedor">
      <div class="foto">
        <p>Laboratorio de diseño!!! Ventas de ropa, accesorios y artículos para el
        hogar,todos diseñados y confeccionados en Cuba, 100% artesanales</p> 
      </div>
      <div class="foto">
        <p>Laboratorio de diseño!!! Ventas de ropa, accesorios y artículos para el
        hogar,todos diseñados y confeccionados en Cuba, 100% artesanales</p> 
      </div>
      <div class="foto">
        <p>Laboratorio de diseño!!! Ventas de ropa, accesorios y artículos para el
        hogar,todos diseñados y confeccionados en Cuba, 100% artesanales</p> 
      </div>
      <div class="foto">
        <p>Laboratorio de diseño!!! Ventas de ropa, accesorios y artículos para el
        hogar,todos diseñados y confeccionados en Cuba, 100% artesanales</p> 
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.presentacion {
  width: 100vw;
  height: 40vh;
  margin: 0px;
  padding-top: 6vh;
  background-size: cover;
  overflow-x: hidden;
}

.presentacion p {
  color: #FFC069;
  display: flex;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 1.3em;
  font-weight: bolder;
  height: auto;
  justify-content: center;
  margin: 5vh;
  padding: 0px;
  text-align: center;
  text-shadow: 0.5px 0.5px black, -0.5px -0.5px black;
}

.contenedor {
  width: 400vw;
  height: 40vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  animation: slide;
  animation-duration: 30s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
}

.foto {
  width: 100vw;
  height: 40vh;
}

.foto:nth-child(1) {
  background-image: url(https://imgur.com/wihG20k.jpg);
  background-position: center;
  background-size: cover;
}
.foto:nth-child(2) {
  background-image: url(https://imgur.com/b32HK7h.jpg);
  background-position: center;
  background-size: cover;
}
.foto:nth-child(3) {
  background-image: url(https://imgur.com/hRsxQaq.jpg);
  background-position: center;
  background-size: cover;
}
.foto:nth-child(4) {
  background-image: url(https://imgur.com/DfLudlA.jpg);
  background-size: cover;
}

@keyframes slide {
  0% {
    margin-left: 0vw;
  }
  27% {
    margin-left: 0vw;
  }
  29% {
    margin-left: -100vw;
  }
  57% {
    margin-left: -100vw;
  }
  59% {
    margin-left: -200vw;
  }
  87% {
    margin-left: -200vw;
  }
  89% {
    margin-left: -300vw;
  }
  100% {
    margin-left: -300vw;
  }
}
</style>