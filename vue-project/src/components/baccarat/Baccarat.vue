<template>
    <div>    
        <Navbar/>
        <div class="body border border-white col-3">
        <h1>Baccarat Table</h1>        
        <div v-if="gameState">

        </div>
        <div v-else>
            Enter the Number of Player
            <input type="text" v-model="playerNumber">
        </div>

    </div>
    </div>

</template>
<script>
import Navbar from '../navbar/Navbar.vue';

export default {
    data() {
        return {
            playerNumber: 0,
            gameState : null,
        };
    },
    methods: {},
    components: { Navbar }
}
</script>
<style scoped>
.body{
    width:100%;
    height:1000px;
}
</style>