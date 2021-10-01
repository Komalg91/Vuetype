<template>
<div class="about_container">
    <Header />
    <div class="about_bg"></div>
    <Para v-bind:paralists="para_text" />
    <!-- <div class="section1_container">
        <div class="para1">
            <p>Discover the unique atmosphere of our private residential club communities. Once experienced. Never forgoteen. This is classic, comfortable, modern living in nature's most spectacular setting worldwide. Reassuring exclusive. generously welcoming. FInd your unique world - a place where families love to be; creating unforgettable moments, together</p>
        </div>
    </div> -->
    <Gridbox v-bind:gridboxlist="gridboxobj" />
    <!-- <div class="section2_container">
        <div class="section2">
            <div class="section2_left">
                <h2>Our Mission</h2>
                <div class="para2">
                    <p>
                        We don’t build buildings, but rather we build settings where families can create intergenerational memories and enrich their lives in exquisite and untouched sanctuaries. Everything we do is driven by the fundamental desire to create spaces where families can be together.                        
                    </p>
                    <p>
                        These settings offer a relaxed and comfortable sense of community featuring outstanding clubhouses, incredible residential offerings, premier golf courses, welcoming staff, world-class culinary offerings and our custom Outdoor Pursuits program; all offering the highest of service standards to enrich your experience. 
                    </p>
                </div>
            </div>
            <div class="section2_right">
                <img src="../../assets/whatwedo.jpg" alt="" srcset="">
            </div>
        </div>
    </div> -->
    <div class="section3_container">
        <div class="section3">
            <img src="../../assets/cloudfront.jpg" alt="" srcset="">
        </div>
    </div>
    <div class="section4_container">
        <div class="section4">
            <div class="slider">
            <article class="section4_content" v-for="(items,index) in img_array" :key="index">
                <a href="#"> 
                    <figure class="section4_figure">
                        <img :src="items.world_image" alt="" srcset="">
                        <div class="slider_content">
                            <h2 id="slider_text1">{{items.world_text1}}</h2>
                            <h2 id="slider_text2">{{items.world_text2}}</h2>
                        </div>

                    </figure>
                    <!-- <h2 class="world_item_text1">{{items.world_text1}}</h2>
                    <h2 class="world_item_text2">{{items.world_text2}}</h2> -->
                </a>
            </article>
            </div>
        </div>
    </div>
    <div class="section5_container">
        <div class="section5">
            <img src="../../assets/whatwedesign.jpg" alt="" srcset="">
        </div>
    </div>
    
    <Griddesign v-bind:gridlistdesign="griddesignobj" />
    <!-- <div class="section6_container">
        <div class="section6">
            
            <div class="section6_right_img">
                <img src="../../assets/design2.jpg" class="img1" alt="" srcset="">
            </div>
            <div class="para6">
                <h2>Discovery design</h2>
                <p>See the beauty in every corner of your new, bespoke home away from home. From fabrics and furniture pieces to floorplans, our professional designers will collaborate closely with you to create an interior living space which reflects your style and unique tastes as well as perfectly complementing your lifestyle.
                </p>
            </div>
            <div class="section6_left">
                <img src="../../assets/design1.jpg" alt="" srcset="" class="img2">
            </div>
            
            
        </div>
    </div> -->
    <div class="section5_container">
        <div class="section5">
            <img src="../../assets/golfclubhouse.jpg" alt="" srcset="">
        </div>
    </div>

    <Grid v-bind:gridlist="gridlistobj" />

    <!-- <div class="section6_container">
        <div class="section6">
            
            <div class="section6_right_img">
                <img src="../../assets/builder2.jpg" class="img1" alt="" srcset="">
            </div>
            <div class="para6">
                <h2>Discovery Builders</h2>
                <p>Every Discovery property is wonderfully in-tune with its natural surroundings - a harmonious blend of the architecturally impressive with the environmentally sensitive. And your every expectation will be met, with our meticulous eye for detail matching outstanding levels of craftsmanship and master building.
                </p>
            </div>
            <div class="section6_left">
                <img src="../../assets/builders.jpg" alt="" srcset="" class="img2">
            </div>
            
            
        </div>
    </div> -->
    <div class="section7_container">
        <div class="section7">
            <img src="../../assets/whatwefooter.jpg" alt="" srcset="">
            <div class="text1">
                <p>Our Worlds</p>
            </div>
        </div>
    </div>

    

   <Footer /> 
</div>
</template>

<script type="module" src="./About.ts"></script>
    
<style lang="scss">
@import './About.scss'
</style>