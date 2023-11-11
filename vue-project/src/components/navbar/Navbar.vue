<template>
        <div class="bg-light navbarStyle">
            <ul class="list-unstyled d-block mx-auto text-center p-2">
                <!-- <li>
                    <RouterLink to="/">Home</RouterLink>
                </li>

                <li>            
                    <RouterLink to="/baccarat">Baccarat</RouterLink>
                </li> -->
                <NavbarlinkCard v-for="navlink in navlinks" 
                :key="navlink.linkName"
                :icon="navlink.linkIcon"
                :navlink="navlink">
                </NavbarlinkCard>
            </ul>
        </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import NavbarlinkCard from "./NavbarlinkCard.vue";
export default{
    components: {
    NavbarlinkCard,
},
    data(){
        return{
            navlinks:[
            {linkName: "Home",linkIcon: ["fas", "home"],routeTo: "/Home",},
            {linkName: "Baccarat",linkIcon: ["fas", "card"],routeTo: "/baccarat",},
            ]
        }
    }
}
</script>

<style>
.navbarStyle {
  z-index: 1;
  border-radius: 40px;
  position: fixed;
  width:95%;
  margin:10px auto;
  left: 0;
  right: 0;
  top: 0;
}
</style>