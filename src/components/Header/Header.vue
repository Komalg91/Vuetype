<template>
    <header class="gallery_header">
        <div class="left_header">
            <img src="../../assets/logod.png" alt="" srcset="">
            <!-- <span class="discovery_header_text1">Discovery</span>
            <span class="discovery_header_text2">Land Company</span> -->

        </div>
        
        <nav class="nav_header">
            <ul class="nav_ul">
                <li class="nav_li" v-for="(items,index) in header_items" :key= "index"><a href="#" class="nav_li_link">{{items.header_text}}</a></li>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    </header>
</template>

<script type="module" src="./Header.ts">
</script>

<style lang="scss">
@import './Header'
</style>
