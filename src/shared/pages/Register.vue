<template>
  <div>
 <Header/>
    <main>
      <div class="box">
      <h2>Register</h2>
      <form>
        <div class="inputBox">
          <label for="userName">Username</label>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="type your username"
            required
          />
        </div>
        <div class="inputBox">
          <label for="userPassword">Password</label>
          <input
            type="password"
            name="userPassword"
            id="userPassword"
            placeholder="type your password"
            required
          />
        </div>
        <div class="inputBox">
          <label for="userConfirmPassword">Confirm Password</label>
          <input
            type="password"
            name="userPassword"
            id="userConfirmPassword"
            placeholder="confirm your password"
            required
          />
        </div>
        <button type="submit" name="" style="float: left">Submit</button>
        <router-link class="button" style="float: left" to="/login"
        >Login</router-link        >
      </form>
    </div>
    </main>
    
    
  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  name: "Register",
  data() {
    return {};
  },
  components:{
    Header
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap");
* {
  font-family: "Roboto Mono";
}

main{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  background-color: rgb(206, 202, 100);
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(206, 202, 100, 0.5);
  margin: auto;
  padding: 20px;
  text-align: left;
  width: 70vw;
  animation: entrada 0.5s ease-in
}

.box h2 {
  margin: 0 0 30px 0;
  padding: 0;
  color: rgb(47, 83, 63);
  text-align: center;
  font-family: "Quicksand", sans-serif;
}

.box .inputBox label {
  color: rgba(123, 164, 138.8);
}

.box .inputBox input {
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(8, 54, 54, 0.8);
  color: rgb(47, 83, 63);
  font-size: 14px;
  letter-spacing: 1px;
  margin-bottom: 30px;
  outline: none;
  padding: 10px 0;
  width: 100%;
}

.box input[type="submit"],
.box button[type="submit"],
a.button {
  font-family: sans-serif;
  background: rgba(8, 54, 54, 0.8);
  font-size: 11px;
  border: none;
  border-radius: 5px;
  color: rgba(123, 164, 137, 1);
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
  from {
    transform: scale( 0)
  }
}
</style>