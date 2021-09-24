<template>
  <div class="world_container">
     <Header/>
    <main>
        <article class="video_bg">
            <video autoplay muted loop>
                <source src="https://player.vimeo.com/external/536055631.hd.mp4?s=7f6a254bdf972674127e5909312fa5de8b8d2453&profile_id=174&download=1">
            </video>
        </article>
        <!-- <article class="world_item1">
            <article class="world_item1_content" v-for="(items,index) in img_array" :key="index">
                <a href="#"> 
                    <figure class="world_item_figure">
                        <img :src="items.world_image" alt="" srcset="">
 
                    </figure>
                    <h2 class="world_item_text1">{{items.world_text1}}</h2>
                    <h2 class="world_item_text2">{{items.world_text2}}</h2>
                </a>
            </article>
            <p>Discover the unique atmosphere of our private residential club communities. Once experienced. Never forgoteen. This is classic, comfortable, modern living in nature's most spectacular setting worldwide. Reassuring exclusive. generously welcoming. FInd your unique world - a place where families love to be; creating unforgettable moments, together</p>
        </article> -->
        <div class="home_section1_container">
            <div class="home_section_bg">
            </div>
            <div class="home_section1_left">
                <span class="">Welcome to</span>
                <span>our World</span>
                <p>Discover the unique atmosphere of our private residential club communities. Once experienced. Never forgoteen. This is classic, comfortable, modern living in nature's most spectacular setting worldwide. Reassuring exclusive. generously welcoming. FInd your unique world - a place where families love to be; creating unforgettable moments, together</p>
            </div>
            <div class="home_section1_right">
                <img src="../assets/home.jpg" alt="" srcset="">
            </div>
        </div>
    </main>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

@Options({
    components:{
        Header, Footer
    }
})
export default class Gallery extends Vue {}

</script>

<style lang="scss">

</style>