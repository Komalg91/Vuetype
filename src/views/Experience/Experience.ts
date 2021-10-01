import { Options, Vue } from 'vue-class-component';

import Video from '@/components/Video/Video.vue';
import Header from '@/components/Header/Header.vue';
import Para from '@/components/Para/Para.vue';
import Footer from '@/components/Footer/Footer.vue';
import Box from '@/components/Box/Box.vue';
import Gridbox from '@/components/Gridbox/Gridbox.vue';
import Footerworld from '@/components/Footerworld/Footerworld.vue';

@Options({
    components:{
        Video, Header, Para, Footer, Box, Gridbox, Footerworld
    }
})
export default class Experience extends Vue{
    data(){
        return{
            box_data: [
                {
                    box_head: "Golf",
                    box_text: "We commission the world’s most renowned course architects to design spectacular golf experiences on challenging yet incredibly playable 18-hole courses. Our trademark comfort stations also set new standards in on-course amenities.", 
                    box_img: require('../../assets/experience/golf.jpg')
                },
                {
                    box_head: "Outdoor Pursuits",
                    box_text: "Our signature Outdoor Pursuits program is designed for families to create memories together. Whether you’re trying a new sport or taking a day trip, our team will ensure you make the most of every minute with activities designed to help you take advantage of everything each region has to offer.", 
                    box_img: require('../../assets/experience/outdoor.jpg')
                },
                {
                    box_head: "Wellness",
                    box_text: "Unwind at an indulgent spa. Set challenging targets with a tailor-made fitness plan. Or let our talented chefs treat you to our flavorful international menus created using the finest, carefully selected foods sourced locally from organic farms.", 
                    box_img: require('../../assets/experience/wellness.jpg')
                },

            ],

            para_text_exp: "Memorable days. Exceptional nights. We believe it’s our mission to make every minute matter. So you can live your life to the fullest, with the people closest to you.",
            grid_exp_obj:{
                head_expgrid: "Exclusive to our world ",
                para1_expgrid: "Our worlds are designed to offer you endless opportunities to share incredible once-in-a-lifetime experiences and adventures every single minute of the day. Each of our settings offers a relaxed sense of community through exceptional clubhouses, world-class golf courses, welcoming staff and an extensive Outdoor Pursuits program. Create moments of joy and wonder, unforgettable memories and cherished times, together with those who matter most.",
                para2_expgrid: "",
                img_expgrid: require('../../assets/exp_1.jpg')
            }
            
            
        }
    }
}
