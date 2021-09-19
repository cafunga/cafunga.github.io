<template>
    <a href=""><button>Contactar</button></a>
</template>
<style scoped>
button{
    background-color: rgb(20,58,58) ;
    color:rgb(123,164,137);
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
    transform: scale(0)

}
button:active{
    transform: scale(0.95)
}

@keyframes entrada {
    to{
        /* transform: translateY(0); */
        transform: scale(1);
    }
}
</style>