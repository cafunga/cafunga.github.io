<template>
  <Header />
   <div class="a">Página no encontrada: <br>Error 404</div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
components:{Header}
}
</script>

<style scoped>
*{
  margin: 0px;
}

template{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: flex-start;
}
.a{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>