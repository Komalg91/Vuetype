<template>
  <div class="gallery_container">
     <Header/>
    <main>
        <article>
            <div class="header_bg_img">
                <!-- <img src="https://dxaurk9yhilm4.cloudfront.net/images/7383/jael-rodriguez-AkF5NT0sZy8-unsplash-1-1_210301_200939_35d31212c7a2d4dccdff99afa3f88af5.jpg" alt="" srcset=""> -->
                <div class="gallery_title">Gallery</div>
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

<script ltype="module" src="./gallery.ts"></script>


<style lang="scss">
@import './gallery.scss'
</style>