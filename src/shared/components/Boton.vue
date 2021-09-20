<template>
  <a
    href="https://api.whatsapp.com/send?phone=5354843881&text=Hola%20Cafunga,%20le%20he%20echado%20un%20vistazo%20a%20tu%20sitio%20web%20y%20no%20esta%20nada%20mal.%20Me%20interesan%20algunos%20productos.%20Saludos"
  >
    <button> Contactar
      <i class="icon-whatsapp-1"></i></button
  ></a>
  <link
    href="https://file.myfontastic.com/nB6NAFkFa6p2FWCDwKY5V5/icons.css"
    rel="stylesheet"
  />
</template>
<style scoped>
button {
  background-color: rgb(20, 58, 58);
  color: rgb(123, 164, 137);
  font-size: 0.8em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  line-height: 3;
  width: 9em;
  border-radius: 5em;
  border: 1px solid rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 53vh;
  left: calc(50vw - 4.5em);
  animation: entrada 0.4s 1s ease-in forwards;
  /* transform: translateY(100vh); */
  transform: scale(0);
  display: flex;
  justify-content: space-around;
  align-items: center;

}
button:active {
  transform: scale(0.95);
}

.icon-whatsapp {
font-size: 2em;
}

@keyframes entrada {
  to {
    /* transform: translateY(0); */
    transform: scale(1);
  }
}
</style>