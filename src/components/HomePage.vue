<template>
    <b-container fluid class="p-0">
            <HomeTitle/>
            <HomeMenu/>
    </b-container>
</template>

<script>
import HomeTitle from "./HomeTitle.vue";
import HomeMenu from "./HomeMenu.vue";
export default {
    name: "HomePage",
    components : {
        HomeTitle,
        HomeMenu,
    }
}
</script>

<style>

</style>