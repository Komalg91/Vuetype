<template>
    <div class="row1">
        <div class="row1_item">
            <div class="section3_img1">
                <img :src="this.selectedValue.box_img" alt="" srcset="">
                <!-- <div class="section3_img2"></div> -->
            </div>
        </div>
        <div class="row1_item1_container">
            <div class="row1_item1">
                <div class="section3_box2">
                    <div class="box2_head_news">
                        <h6>{{this.selectedValue.box_head_news}}</h6>
                    </div>
                    <div class="box2_head">
                        <h2>{{this.selectedValue.box_head}}</h2>
                    </div>
                    <div class="box2_text">
                        <p>
                            {{this.selectedValue.box_text}}
                        </p>
                    </div>
                    <button type="submit" class="explore_btn">Explore</button>
                </div>
            </div>
        </div>
        
    </div>
    <div class="arrow_btn">
                <div class="left_btn">
                    <button @click="leftclick(this.selectedValue.id)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                    </button>
                </div>
                <div class="slide_number">
                    {{(this.selectedValue.id)}} - {{this.box_data_slider.length}}
                </div>
                <div class="right_btn">
                    <button @click="rightclick(this.selectedValue.id)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg>
                    </button>
                </div>
            </div>
</template>

<script type="module" src='./Boxslider.ts'>

</script>

<style lang="scss">
@import './Boxslider';
</style>