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
            <div class="row2">
                <h3 class="news_boxslider">Latest news</h3>
            </div>
            <div class="row">
                <Boxslider />
            </div>
        </div>
        </div>
        <div class="section2_press_container">
            <div class="title_press">Press</div>
            <div class="section2_press_content">
                <div class="press_row">
                    <div class="head1_press">
                            <h2>{{this.selectedValue.head1}}</h2>                    
                    </div>
                    <div class="head2_press">
                        {{this.selectedValue.head2}}
                    </div>
                    <button type="submit" class="explore_btn_footer">Read Article</button>

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
        </div>
        <Footer />
    </div>
</template>


<script type="module" src="./Press.ts">
</script>

<style lang="scss">
@import './Press.scss';
</style>