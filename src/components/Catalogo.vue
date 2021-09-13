<template>
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
.container {
  background-color: #fdfce0;
  width: 100vw;
  height: 100vw;
}
.product-img {
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 70vw;
  box-shadow: 0px 10px 10px #fdfce0 inset,
              0px -10px 10px #fdfce0 inset;
}

.description-product {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vw;
  font-size: 2vh;
  text-align: center;
  width: 98%;
  color: #dad773;
  padding:2%;
  
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