
<template>
  <main>
    <div class="box">
      <h2>Login</h2>
      <form>
        <div class="inputBox">
          <label for="userName">Username</label>
          <input type="text" name="userName" id="userName" placeholder="type your username" required/>
        </div>
        <div class="inputBox">
          <label for="userPassword">Password</label>
          <input type="password" name="userPassword" id="userPassword" placeholder="type your password"
                 required/>
        </div>
        <div>
          <button type="submit" name="">Submit</button>
          <router-link class="button" to="/register">Register</router-link>
        </div>
      </form>
    </div>  
  </main>
</template>

<script>

export default {
  name: "Login",
  data() {
    return {

    }
  },

}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap");
* {
  font-family: "Roboto Mono";
}

main{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.box {
  background-color: rgb(206, 202, 100);
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(206, 202, 100,.5);
  margin: auto;
  padding: 20px;
  text-align: left;
  animation: entrada 0.5s ease-in;
  transform-origin: center;
  width: 70vw;
}

.box h2 {
  margin: 0 0 30px 0;
  padding: 0;
  color: rgb(47,83,63);
  text-align: center;
  font-family: 'Quicksand', sans-serif;
}

.box .inputBox label {
  color: rgba(123,164,138.8);;
}

.box .inputBox input {
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(8,54,54,.8);
  color: rgb(47,83,63);
  font-size: 14px;
  letter-spacing: 1px;
  margin-bottom: 30px;
  outline: none;
  padding: 10px 0;
  width: 100%;
}

.box input[type="submit"], .box button[type="submit"], a.button {
  font-family: sans-serif;
  background: rgba(8,54,54,.8);
  font-size: 11px;
  border: none;
  border-radius: 5px;
  color: rgba(123,164,137,1);
  cursor: pointer;
  font-weight: 600;
  padding: 10px 20px;
  letter-spacing: 2px;
  outline: none;
  text-transform: uppercase;
  text-decoration: none;
  margin: 2px 10px 2px 0;
  display: inline-block;
  
}

.box input[type="submit"]:hover, 
.box button[type="submit"]:hover, 
a.button:hover {
  opacity: 0.8;
}


@keyframes entrada {
  from 
  {
    transform: scale(0);
  }
}
</style>