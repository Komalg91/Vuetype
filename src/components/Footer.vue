<template>
    <footer class="gallery_footer_container">
        <div class="gallery_footer1">
            <div class="footer_content_top">
                <img src="../assets/logod.png" alt="" srcset="" class="footer_img">
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

<script lang="ts">
import { Vue } from 'vue-class-component';
export default class Footer extends Vue{
     data(){
        return{
            header_items: [
                {
                    header_text: "About DLC"
                },
                {
                    header_text: "Our World"
                },
                {
                    header_text: "Experiences"
                },
                {
                    header_text: "Gallery"
                },
                {
                    header_text: "Press"
                }
            ],
            header_items2: [
                {
                    header_text2: "Magazine"
                },
                {
                    header_text2: "Careers"
                },
                {
                    header_text2: "Foundation"
                },
                {
                    header_text2: "Company"
                },
                {
                    header_text2: "Contact"
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
.gallery_footer_container{
    background-color: #161f1e;
    padding-left: calc(10vw * .75);
    padding-right: calc(10vw * .75);
    position: relative;    
}
.footer_content_top{
    display: flex;
    justify-content: space-between;
    padding-top: calc(10rem*0.75);
    padding-bottom: calc(10rem *0.4);
}
.footer_content_bottom{
    display: flex;
    justify-content: space-between;
    padding-bottom: calc(10rem *0.4);
}
.footer_content_bottom span{
    font-size: 0.6rem;
    color: hsla(0,0%,100%,.75);
    opacity: 0.75;
    // 
}
.nav_footer{
    display: flex;
    color: #fff;
    margin: 0;
    padding: 0;
}
.footer_img{
    width: 60px;
    height: 60px;
    // height: 10.5vh;
    object-fit: cover;
    object-position: left;
    z-index: 999;
    // overflow: hidden;
    // clip: rect(0px,60px,100px,0px);
}
// .footer_content_top img{
//     width: 7vw;
//     height: 7vh;
// }
.footer_item1{
    text-align: start;
}
.footer_item2{
    display: flex;
    text-align: start;
}
.footer_item1_h4{
    width: 100%;
    // font-family: messina-sans;
    text-transform: uppercase;
    font-size: .7rem;
    margin-bottom: .75rem;
    letter-spacing: -.01em;    
    margin: 0;
}
.footer_item1_ul{
    list-style: none;
    line-height: 2;
    padding-left: 0;
}
.footer_item1_li{
    line-height: 2;
    // font-size: 0.9rem;

}
.footer_item21_ul, .footer_item22_ul{
    list-style: none;
    padding-left: 0;
    margin: 0;
}
.footer_item21_li:not(:first-child), .footer_item22_li:not(:first-child){
    line-height: 2;
}
.footer_item22, .footer_item21{
    margin-left: calc(10vw * 0.75);
}
.footer_item1_li, .footer_item21_li, .footer_item22_li{
    margin-bottom: 0.25rem;
    font-size: 0.75rem;
}

@media screen and (max-width: 700px){
 .nav_footer{
        flex-direction: column;
    }
    .footer_content_top{
        flex-direction: column;
    }
    .footer_item1, .footer_item2{
        margin-top: 2rem;
    }
    .footer_item21{
        margin-left: 0;
    }
    .footer_item21_li, .footer_item22_li{
        line-height: 2;
    }
    .footer_item1_li, .footer_item21_li, .footer_item22_li{
        font-size: 0.6rem;
    }
    // .footer_img{
    //     width: 10vw;
    // }
}
@media screen and (max-width: 500px){
    .nav_footer{
        flex-direction: column;
    }
    // .footer_img{
    //     width: 17vw;
    // }
}

</style>