<template>
    <div class="press_container">
        <Header />
        <div class="image_opacity">
            <article>
                <div class="header_bg_img">
                    <!-- <img src="https://dxaurk9yhilm4.cloudfront.net/images/7383/jael-rodriguez-AkF5NT0sZy8-unsplash-1-1_210301_200939_35d31212c7a2d4dccdff99afa3f88af5.jpg" alt="" srcset=""> -->
                </div>  
                <div class="text text1">News</div>
                <div class="text text2">and Press</div>
            </article>
        </div>
        <div class="section3_container">
        <div class="section3_content">
            <div class="row" v-for="(items, index) in box_data" :key="index">
                <Box v-bind:itemlist="items"/>
            </div>
        </div>
        </div>
        <Footer />
    </div>
</template>


<script type="module" src="./Press.ts">
</script>

<style lang="scss">
@import './Press.scss';
</style>