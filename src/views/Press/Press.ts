import {Options, Vue} from 'vue-class-component';

import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';
import Box from '@/components/Box/Box.vue';


@Options({
    components:{
        Header, Footer, Box
    }
})
export default class Press extends Vue{
    data(){
        return{
            box_data: [
                {
                    box_head: "Golf",
                    box_text: "We commission the world’s most renowned course architects to design spectacular golf experiences on challenging yet incredibly playable 18-hole courses. Our trademark comfort stations also set new standards in on-course amenities.", 
                    box_img: require('../../assets/Press/press1.jpg')
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
        }
    }
}