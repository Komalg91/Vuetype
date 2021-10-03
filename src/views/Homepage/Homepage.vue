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
                    <article class="row3_content" v-for="(items,index) in globe_array" :key="index">
                        <a href="#"> 
                            <figure class="row3_figure">
                                <img :src="items.world_image" alt="" srcset="">
                                <div class="content">
                                <h2 id="world_item_text1">{{items.world_text1}}</h2>
                                <h2 id="world_item_text2">{{items.world_text2}}</h2>
                                </div>

                            </figure>
                            <!-- <h2 class="world_item_text1">{{items.world_text1}}</h2>
                            <h2 class="world_item_text2">{{items.world_text2}}</h2> -->
                        </a>
                    </article>
                </div>
            </div>
        </div>
        <div class="globe_container">
            <div class="globe_row1">
                <h2>Lands of Discovery</h2>
                <div class="text4">
                    <p>A world away from the day-to-day. Your escape. Your heaven. Explore the map below and take a journey to our communities.</p>
                </div>
                <div class="country">
                    <div class="country_item1">North America &#38; Caribbean</div>
                    <div class="country_item1">Hawaii</div>
                    <div class="country_item1">Europe</div>
                </div>
            </div>
            <div class="globe_row2">
                <div class="globe_bg">
                </div>
                <div class="globe_box">
                    <div class="globe_item_left">
                        <div class="arrow_btn">
                            <div class="left_btn">
                                <button type="submit">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                                    </svg>
                                </button>
                            </div>
                            <div class="right_btn">
                                <button type="submit" @click="leftclick(this.selectedValue.id)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="globe_icons">
                            <div class="globe_item">
                                <div class="icon_item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-brightness-low" viewBox="0 0 16 16">
                                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm.5-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z"/>
                                    </svg>
                                </div>
                                <div class="temperature">{{selectedValue.weather}}</div>
                            </div>
                            <div class="globe_item">
                                <div class="icon_item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-wind" viewBox="0 0 16 16">
                                    <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"/>
                                    </svg>
                                </div>
                                <div class="temperature">{{selectedValue.wind}}</div>
                            </div>
                            <div class="globe_item">
                                <div class="icon_item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-compass" viewBox="0 0 16 16">
                                        <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                                        <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/>
                                    </svg>
                                </div>
                                <div class="temperature">{{selectedValue.compass}}</div>
                            </div>      

                        </div>
                        <div class="globe_text">
                            <div class="globe_text1">
                                {{selectedValue.world_text1}}
                            </div>
                            <div class="globe_text2">
                                {{selectedValue.world_text2}}                            
                                </div>
                        </div>
                        <div class="lat_long">
                            <div class="lat_long_item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                </svg>
                                <div class="text3">
                                    29.456123 N/-23.256987 W
                                </div>
                            </div>
                        </div>
                        <!-- <h4>Scottsdale, Arizone</h4>
                        <h2>Estancia</h2> -->
                        
                    </div>
                    <div class="globe_item_right">
                        <div class="globe_content">
                        <div class="globe_img">
                            <img src="../../assets/design1.jpg" alt="" srcset="">
                        </div>
                        </div>
                    </div>
                    <!-- <div class="globe_img">
                            <img src="../../assets/design1.jpg" alt="" srcset="">
                        </div> -->
                </div>
            </div>
        </div>
        <div class="home_section2_container">
            <div class="section_row2">
                <div class="row2_content">
                    <div class="row2_content_img1">
                        <img src="https://dxaurk9yhilm4.cloudfront.net/images/728/Expereinces_slider_190716_095517_e36797c82dbcb9dea0800f713424f022.jpg" alt="">
                        <p id="text">
                            Experiences
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                            </svg>
                        </p>                    
                    </div>
                    <div class="row2_content_img1">
                        <img src="https://dxaurk9yhilm4.cloudfront.net/images/729/lifestyle_slider_190716_095537_fc98236fcd7afd38ca0fd181cf61bcb6.jpg" alt="">
                        <p id="text">
                            Lifestyle
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                            </svg>
                        </p> 
                    </div>
                    <div class="row2_content_img1">
                        <img src="https://dxaurk9yhilm4.cloudfront.net/images/730/wellness_slider_190716_095551_90f8ce634cc6ad7a15d605007f03ee5c.jpg" alt="">
                    <p id="text">
                            Wellness
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                            </svg>
                        </p> 
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