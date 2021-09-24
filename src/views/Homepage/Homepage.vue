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
                <div class="section_row1">
                    <div class="row1_content">
                        <div class="row1_left">
                            <h3 class="">Welcome to</h3>
                            <span>our World</span>
                            <p>Discover the unique atmosphere of our private residential club communities. Once experienced. Never forgoteen. This is classic, comfortable, modern living in nature's most spectacular setting worldwide. Reassuring exclusive. generously welcoming. FInd your unique world - a place where families love to be; creating unforgettable moments, together</p>
                        </div>
                        <div class="row1_right">
                            <img src="../../assets/home.jpg" alt="" srcset="">
                        </div>
                        <div class="row1_left2">
                            <img src="../../assets/home2.jpg" alt="" srcset="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="home_section3_container">
            <div class="section_row3_item1">
                <div class="section_item1_left">
                    <div class="explore"><p>Explore</p></div>
                    <div class="our_world1"><p>our worlds</p></div>
                </div>
                <div class="section_item1_right">
                    <button type="submit" class="arrow_right"></button>
                    <button type="submit" class="arrow_right btn2"></button>
                </div>
            </div>
            <div class="section_row3">
                <div class="slider_row">
                    <article class="row3_content" v-for="(items,index) in img_array" :key="index">
                        <a href="#"> 
                            <figure class="row3_figure">
                                <img :src="items.world_image" alt="" srcset="">
                            </figure>
                            <!-- <h2 class="world_item_text1">{{items.world_text1}}</h2>
                            <h2 class="world_item_text2">{{items.world_text2}}</h2> -->
                        </a>
                    </article>
                </div>
            </div>
        </div>
        <div class="home_section2_container">
            <div class="section_row2">
                <div class="row2_content">
                    <div class="row2_content_img1">
                        <img src="https://dxaurk9yhilm4.cloudfront.net/images/728/Expereinces_slider_190716_095517_e36797c82dbcb9dea0800f713424f022.jpg" alt="">
                    </div>
                    <div class="row2_content_img1">
                        <img src="https://dxaurk9yhilm4.cloudfront.net/images/729/lifestyle_slider_190716_095537_fc98236fcd7afd38ca0fd181cf61bcb6.jpg" alt="">
                    </div>
                    <div class="row2_content_img1">
                        <img src="https://dxaurk9yhilm4.cloudfront.net/images/730/wellness_slider_190716_095551_90f8ce634cc6ad7a15d605007f03ee5c.jpg" alt="">
                    </div>
                    
                </div>
            </div>
        </div>
        
    </main>
  </div>
  <Footer />
</template>

<script type="module" src="./homepage.ts"></script>

<style lang="scss">
  @import './homepage.scss';
</style>