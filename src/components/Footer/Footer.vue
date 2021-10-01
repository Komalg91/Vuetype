<template>
    <footer class="gallery_footer_container">
        <div class="gallery_footer1">
            <div class="footer_content_top">
                <img src="../../assets/logod.png" alt="" srcset="" class="footer_img">
                <div class="footer_right">
                    <nav class="nav_footer">
                        <div class="footer_item1">
                            <h4 class="footer_item1_h4">Get in touch</h4>
                            <ul class="footer_item1_ul">
                                <li class="footer_item1_li">(123) 456 789</li>
                                <li class="footer_item1_li">mail@mail.com</li>
                            </ul>
                        </div>
                        <div class="footer_item2">
                            <div class="footer_item21">
                                <ul class="footer_item21_ul">
                                    <li class="footer_item21_li" v-for="(items,index) in header_items" :key= "index">{{items.header_text}}</li>
                                </ul>
                            </div>
                            <div class="footer_item22">
                                <ul class="footer_item21_ul">
                                    <li class="footer_item22_li" v-for="(items,index) in header_items2" :key= "index">{{items.header_text2}}</li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div class="footer_content_bottom">
                <span>&#169; Discovery Landco. All rights reserved</span>
            </div>
            
        </div>
    </footer>
</template> 

<script type='module' src='./Footer.ts'></script>


<style lang="scss">
@import './Footer'
</style>