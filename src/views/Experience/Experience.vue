<template>
    <div class="experience_container">
        <Header />
        <main>
            <Video v-bind:video_comp="video_exp"/>
            <Para  v-bind:paralists="para_text_exp" />
            <Gridbox v-bind:gridboxlist="grid_exp_obj"/>
              <!-- <div class="section2_container">
                  <div class="row_exp">
                  <div class="section2">
                     <div class="section2_left">
                        <h2>Exclusive to</h2>
                        <h2>your world</h2>
                        <div class="para2">
                            <p>
                                Our worlds are designed to offer you endless opportunities to share incredible once-in-a-lifetime experiences and adventures every single minute of the day. Each of our settings offers a relaxed sense of community through exceptional clubhouses, world-class golf courses, welcoming staff and an extensive Outdoor Pursuits program. Create moments of joy and wonder, unforgettable memories and cherished times, together with those who matter most.
                            </p>
                        </div>
                    </div>
                    <div class="section2_right">
                        <img src="../../assets/exp_1.jpg" alt="" srcset="">
                    </div>
                </div> 
                </div>
            </div>  -->
            <!-- <div class="experience_container"> -->
            <div class="section3_container">
                <div class="section3_content">
                    <div class="row" v-for="(items, index) in box_data" :key="index">
                        <Box v-bind:itemlist="items"/>
                    </div>
                </div>
            <!-- </div> -->
            </div>
            <Footerworld />
        </main>
        
        <Footer />
    </div>
    
</template>

<script type="module" src="./Experience.ts">

</script>

<style lang="scss">
@import './Experience.scss'
</style>