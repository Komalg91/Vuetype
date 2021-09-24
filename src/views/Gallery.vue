<template>
  <div class="gallery_container">
     <Header/>
    <main>
        <article>
            <div class="header_bg_img">
                <!-- <img src="https://dxaurk9yhilm4.cloudfront.net/images/7383/jael-rodriguez-AkF5NT0sZy8-unsplash-1-1_210301_200939_35d31212c7a2d4dccdff99afa3f88af5.jpg" alt="" srcset=""> -->
            </div>
        </article>
        <article class="gallery_item1">
            
            <article class="gallery_item1_content" v-for="(items,index) in img_array" :key="index">
                <a href="#"> 
                    <figure class="gallery_item_figure">
                        <img :src="items.gallery_image" alt="" srcset="">
 
                    </figure>
                    <h2 class="gallery_item_text">{{items.gallery_text}}</h2>
                </a>
            </article>
        </article>
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
export default class Gallery extends Vue {
    data() {
        return{
            img_array: [
                {
                    gallery_image: require("../assets/gallery/outdoor.jpg"),
                    gallery_text: "Outdoor Pursuits"
                },
                {
                    gallery_image: require("../assets/gallery/golf.jpg"),
                    gallery_text: "Golf"
                },
                {
                    gallery_image: require("../assets/gallery/lifestyle.jpeg"),
                    gallery_text: "Lifestyle"
                },
                {
                    gallery_image: require("../assets/gallery/landscapes.jpg"),
                    gallery_text: "Landscapes"
                },
                {
                    gallery_image: require("../assets/gallery/clubhouses.jpg"),
                    gallery_text: "Clubhouses"
                },
                {
                    gallery_image: require("../assets/gallery/wellness.jpg"),
                    gallery_text: "Wellness"
                }
            ]
        }
    }
}
</script>

<style lang="scss">
body{
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    // // overflow-y: scroll;
    height: 100%;
}
html{
    font-size: 20px;
}
*{
    box-sizing: border-box;
}
// .gallery_container{
//     min-width: 100%;

// }

figure{
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: relative;
}
.header_bg_img{
    background-color: #490D40;
   background: url(https://dxaurk9yhilm4.cloudfront.net/images/7383/jael-rodriguez-AkF5NT0sZy8-unsplash-1-1_210301_200939_35d31212c7a2d4dccdff99afa3f88af5.jpg) no-repeat center center;
   background-size: cover;
   height: 65vh;
   margin-top: -20px;
 
//     // position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
}
.gallery_item1{
    display: grid;
    grid-template-columns: repeat(3,1fr);
}
.gallery_item1_content{
    background-color: #000;
}
.gallery_item1_content img{
    width: 100%;
    left: 0;
    top: 0;
    height: 100%;
    object-fit: cover;
}
.gallery_item_text{
    text-align: center;
    color: #fff;
    font-family: Georgia, 'Times New Roman', Times, serif;
    padding: 3rem 1.5rem;
    margin: 0;
    font-size: 1em;
    white-space: nowrap;
}
a{
    text-decoration: none;
}


@media screen and (max-width: 1000px){
    .gallery_item1{
        grid-template-columns: repeat(2,1fr);
    }
   
}

@media screen and (max-width: 500px){
    .gallery_item1{
        grid-template-columns: repeat(1,1fr);
    }
}


</style>