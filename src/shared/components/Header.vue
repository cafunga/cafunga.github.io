<template>
  <div class="head">
      <div class="menu">
        <figure>  
          <img
            class="caf_ico"
            src="https://imgur.com/MaXQWYf.png"
            alt="Logo Cafunga"
          />
        </figure>
        <figure> 
          <img
            @click="toggle"
            class="caf_menu"
            src="https://imgur.com/Vl8Q1Gm.png"
            alt="Menu"/>
        </figure>
      </div>
      <div class="barra" :class="{showhide}" >
        <ul>
          <li><router-link to="/" >Principal</router-link></li>
          <li><router-link to="/login">Log In</router-link></li>
          <li><router-link to="/register">Registrarse</router-link></li>
          <li><router-link to="/FAQ">FAQ</router-link></li>
        </ul>
    </div>    
  </div>
</template>


<script>
export default {
  data() {
    return {
      showhide: false
    };
  },
  methods: {
    toggle() {
      this.showhide = !this.showhide;
    },
  },
};
</script>




<style scoped>
.head {
  width: 100vw;
  position: fixed;
  top:0;
  z-index: 1000;
  animation: entrada 0.4s ease-in
}
.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(240, 238, 177, 1);
  height: 3.5rem;
}

.caf_ico {
  height: 3rem;
  width: auto;
  padding: 0px;
} 
.caf_menu {
  height: 3rem;
  width: auto;
  padding: 0px 3vw 0px 0px;
}

.barra {
  height: 30vh;
  width: 100%;  
  background-color: rgba(240, 238, 177, 0);
  position: absolute;  
  transform: scale(1 ,0);
  transform-origin: top center;
  transition: transform 0.2s, background-color 0.3s;
}

.barra ul {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  list-style: none;
}

.barra ul li a {
  width: auto;
  color: #b1ad25;
  text-decoration: none;
  font-size: 1.1rem;
}

.showhide {
  transform: scale( 1, 1);
  background-color: rgba(240, 238, 177, 1);
}

@keyframes entrada {
  from 
  {
    transform: translateY( -100%)
  }
}


</style>