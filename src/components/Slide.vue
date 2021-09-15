<template>
   <div>
    <div class="presentacion">
    <div class="contenedor">
      <div class="foto" v-for="n in 4" :key=n>      
        <p>Laboratorio de diseño!!!</p> 
      </div>
      
    </div>
    
  </div>  
  <div class="description">
    <p>Ventas de ropa, accesorios y artículos para el
       hogar,todos diseñados y confeccionados en Cuba, 100% artesanales
    </p>
  </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
*{
  margin:0;
  padding:0;
}
.presentacion {
  width: 100vw;
  height: 55vh;
  margin: 0px;
  padding-top: 6vh;
  background-size: cover;
  overflow-x: hidden;
}


.contenedor {
  width: 400vw;
  height: 55vh;
  
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  position: relative;
  
  animation: slide;
  animation-duration: 30s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
  
}

.foto {
  width: 100vw;
  height: 55vh;
  display: flex;
  justify-content: center;
}
 
 
.foto:nth-child(1)::before {
  content: '';
  width: 100vw;
  height: 55vh;
  position: absolute;
  filter: grayscale(0.4);
  background: url(https://imgur.com/wihG20k.jpg) center / cover no-repeat;

  
}
.foto:nth-child(2)::before {
  content: '';
  width: 100vw;
  height: 55vh;
  position: absolute;
  filter: grayscale(0.4);
  background: url(https://imgur.com/b32HK7h.jpg) center / cover no-repeat;

  
}
.foto:nth-child(3)::before {
  content: '';
  width: 100vw;
  height: 55vh;
  position: absolute;
  filter: grayscale(0.4);
  background: url(https://imgur.com/hRsxQaq.jpg) center / cover no-repeat;

  
}
.foto:nth-child(4)::before {
  content: '';
  width: 100vw;
  height: 55vh;
  position: absolute;
  filter: grayscale(0.4);
  background: url(https://imgur.com/DfLudlA.jpg) center / cover no-repeat;

  
}

.presentacion p {
  color: #FFB319;    
  font-size: 1.6em;
  font-weight: bolder;
  margin-top: 6vh;
  width: max-content;
  height: max-content;
  text-align: center;
  text-shadow: 0.5px 0.5px black, -0.5px -0.5px black;
  position:relative;
}
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