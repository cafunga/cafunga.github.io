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
background: #FCFFA6 url(https://imgur.com/w9XqNC2.png) center / 25vh auto no-repeat;
}
.container {
  background-color: #F8F0DF;
  width: 100vw;
  height: 110vw;
}
.product-img {
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 70vw;
  box-shadow: 0px 10px 10px #F8F0DF inset,
              0px -10px 10px #F8F0DF inset;
}

.description-product {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vw;
  font-size: 1rem;
  text-align: center;
  width: 100%;
  padding: 0rem 0.4rem;
  color: #171717;
  background-color: #F8F0DF;
}
@keyframes entrada {
  from{
    transform: translateY(10%)
  }
}

</style>