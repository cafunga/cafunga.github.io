<template>
  <div id="head" :class="{ up: up, down: down }">
    <ul class="barra">
      <router-link to="/" class="a">Principal</router-link>
      <router-link to="/login" class="a">Log In</router-link>
      <router-link to="/register" class="a">Registrarse</router-link>
      <router-link to="/FAQ" class="a">FAQ</router-link>

      <li class="menu">
        <img
          class="caf_ico"
          src="https://imgur.com/MaXQWYf.png"
          alt="Logo Cafunga"
        />
        <img
          @click="toggle"
          class="caf_menu"
          src="https://imgur.com/Vl8Q1Gm.png"
          alt="Menu"
        />
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      down: false,
      up: true,
    };
  },
  methods: {
    toggle() {
      this.down = !this.down;
      this.up = !this.up;
    },
  },
};
</script>




<style scoped>
div {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 30vh;
  background-color: rgba(240, 238, 177, 0.8);
  display: flex;
  flex-direction: column;
  margin-top: -24vh;
  position: fixed;
  z-index:100;
}

ul {
  width: 100%;
  height: 30vh;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

ul li {
  height: 6vh;
  list-style-type: none;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b1ad25;
}

.a{
  height: 6vh;
  list-style-type: none;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b1ad25;
  text-decoration: none;
}

.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(240, 238, 177, 1);

}

.caf_ico {
  height: 6vh;
  width: auto;
  padding: 0px;
}
.caf_menu {
  height: 5vh;
  width: auto;
  padding: 0px 3vw 0px 0px;
}

.up {
  margin-top: -24vh;
  animation: getItUp;
  animation-duration: 200ms;
}

.down {
  margin-top: 0vh;
  animation: getItDown;
  animation-duration: 200ms;
  background-color: rgba(240, 238, 177, 1);
}

@keyframes getItDown {
  0% {
    margin-top: -24vh;
  }

  50% {
    background-color: rgba(240, 238, 177, 0.8);
  }
  100% {
    margin-top: 0vh;
    background-color: rgba(240, 238, 177, 1);
  }
}
@keyframes getItUp {
  0% {
    margin-top: 0vh;
  }
  50% {
    background-color: rgba(240, 238, 177, 0.8);
  }
  100% {
    margin-top: -24vh;
    background-color: rgba(240, 238, 177, 1);
  }
}
</style>