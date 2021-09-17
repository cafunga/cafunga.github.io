import Slide from '@/components/Slide.vue';
<template>
  <div class="slide">
    <div class="presentacion">
      <div class="contenedor">
        <div class="foto" v-for="n in 4" :key=n>      
          <p>Laboratorio de diseño!!!</p> 
        </div>      
      </div>
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
.slide {
  animation: entrada 0.4s ease-in;
  width: 100vw;
  margin-top: 3.5rem;
  overflow: hidden;
}
.presentacion {
  widows: 100%;
  height: 55vh; 
}


.contenedor {
  width: 400vw;
  height: 100%;  
  display: flex; 
  animation: slide 30s infinite alternate linear;
  
}

.foto {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
}
.foto::before{
  content: '';
  width: 100vw;
  height: 55vh;
  position: absolute;
  filter: grayscale(0.5);
  background:  center / cover no-repeat;
}
 
 
.foto:nth-child(1)::before {  
  background-image: url(https://imgur.com/wihG20k.jpg) 

  
}
.foto:nth-child(2)::before {
  background-image: url(https://imgur.com/b32HK7h.jpg) 

  
}
.foto:nth-child(3)::before {
  background-image: url(https://imgur.com/hRsxQaq.jpg) 

  
}
.foto:nth-child(4)::before {
  background-image: url(https://imgur.com/DfLudlA.jpg) 

  
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



@keyframes slide {
  25% {  
        transform: translateX(0);
    }
    27% {
        transform: translateX(-100vw);
    }
    50% {  
        transform: translateX(-100vw);
    }
    52% {
        transform: translateX(-200vw);
    }
    75% {  
        transform: translateX(-200vw);
    }
    77% {  
        transform: translateX(-300vw);
    }
    100% {
        transform: translate(-300vw);
    }
}
@keyframes entrada {
  from 
  {
    transform: translateX(-100%)
  }
}
</style>