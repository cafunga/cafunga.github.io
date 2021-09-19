<template>
   <footer>
        <ul>
            <li> Mapa del sitio</li>
            <li>
                <router-link :to="{name:'homePage'}">
                    <p>Home</p>
                    <span class="material-icons">
                        home
                    </span>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'FAQ'}">                    
                    <p>&#191;Qui&eacute;nes somos&#63;</p>
                    <span class="material-icons">
                        face
                    </span>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'FAQ'}">
                    <p>FAQ</p>
                    <span class="material-icons">
                        live_help
                    </span>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'FAQ'}">
                    <p>Cat&aacute;logo</p>
                    <span class="material-icons">
                        download
                    </span>
                 </router-link>
            </li>
            <li>
                <a href="mailto:maryliansanchez2000@gmail.com">
                    <p>maryliansanchez2000@gmail.com</p>
                    <span class="material-icons">
                        mail
                    </span>
                </a>
            </li>
            <li>
                <span class="address">
                    <p>Sancti Sp&iacute;ritus - Cuba
                    </p>
                    <span class="material-icons">
                        my_location
                    </span>
                </span>
            </li>
        </ul>
    </footer>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</template>

<script>
export default {
  props: {
    msg: String
  }
}
</script>


<style scoped>
    footer{
        background-color: #f0eeb1;
        width: 100%;
        height: 55vh;
        margin: 0px;
        font-family: 'Roboto Condensed', sans-serif;

    }

    footer ul{
        width: 100%;
        height: 55vh;
        padding:0px;
        margin: 0px;       
        display: flex; 
        flex-direction: column;
        flex-wrap: no-wrap;
        align-items: center;
        justify-content:flex-start; 
    }

    footer ul li{
        font-family: 'Roboto Condensed', sans-serif;
        color: #B1AD25;
        margin: 0px;
        display: flex;       
        align-items: center;
        justify-content: center;
    }
      footer ul li{
        padding: 0px;
        list-style: none;
        text-align: center;
        width: 100%;
        display:flex;
        align-items: center;
        justify-content:center;
        flex: 1 1 auto;
        
        
    } 
    footer li a{
        display:flex;
        align-items: center;
        justify-content: center;
        text-decoration:none;
        color: #B1AD25;
    }
    footer li a p{
      border-bottom: dotted;
      margin: 2vh;
    
    }
    .address{
        letter-spacing: normal;
    
    }

</style>
