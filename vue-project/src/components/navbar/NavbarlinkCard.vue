<template>
    <router-link class="nav-link active py-0 d-flex mx-auto " aria-current="page" :to="eachLink.routeTo">
    <li :class="highlighLink(eachLink)">
        <font-awesome-icon :icon="icon" size="lg" /> <!-- Use icon prop to set the Font Awesome icon -->
        <div class="fw-semibold text-black" v-html="`&nbsp;&nbsp;${eachLink.linkName}&nbsp;&nbsp;`"></div> 
    </li>
    </router-link>
</template>
<script>
export default {
    name: "NavbarLink",
    props:['eachLink','icon'],
    methods:{
        highlighLink(eachLink){
            // console.log(this.$route.path);
            // console.log(eachLink.routeTo);
            return this.$route.path.startsWith(eachLink.routeTo)   ? 'nav-item highlightBackground' : 'nav-item';
        }
    }
}
</script>