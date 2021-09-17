<template>
  <div class="box">
    <div class="catalogos"></div>
      <div class="products-container">
        <div v-for="catalogo in catalogos" :key="catalogo.id" class="container">
          <div
            :style="{ 'background-image': `url(${catalogo.url})` }"
            class="product-img"
          ></div>
          <div class="description-product">{{ catalogo.info }}</div>
      </div>
    </div>
  </div>  
</template>

<script>
import catalogoArray from "@/helpers/catalogoArray";
export default {
  data() {
    return {
      catalogos: catalogoArray,
    };
  },
};
</script>

<style scoped>
.box {
  animation: entrada 0.4s ease-in;
}
.catalogos {
width: 100%;
height: 7vh;
margin: 0px;
background: rgba(223,188,93, 0.5) 
url(https://imgur.com/w9XqNC2.png) center / 25vh auto no-repeat;
}
.container {
  background-color: rgb(223,188,93);
  width: 100vw;
  height: 100vw;
}
.product-img {
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 70vw;
  box-shadow: 0px 10px 10px rgb(223,188,93) inset,
              0px -10px 10px rgb(223,188,93) inset;
}

.description-product {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vw;
  font-size: 2vh;
  text-align: center;
  width: 98%;
  color: #112031;;
  padding: 2%;
  background-color:rgb(223,188,93);
}
@keyframes entrada {
  from{
    transform: translateY(10%)
  }
}

</style>