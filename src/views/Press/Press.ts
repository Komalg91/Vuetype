import {Options, Vue} from 'vue-class-component';

import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';
import Boxslider from '@/components/Boxslider/Boxslider.vue';


@Options({
    components:{
        Header, Footer, Boxslider
    }
})
export default class Press extends Vue{
               
            public box_data_slider = [
                {
                    id: 1,
                    box_head: "Golf",
                    box_text: "We commission the world’s most renowned course architects to design spectacular golf experiences on challenging yet incredibly playable 18-hole courses. Our trademark comfort stations also set new standards in on-course amenities.", 
                    box_img: require('../../assets/Press/press1.jpg')
                },
                {
                    id: 2,
                    box_head: "Outdoor Pursuits",
                    box_text: "Our signature Outdoor Pursuits program is designed for families to create memories together. Whether you’re trying a new sport or taking a day trip, our team will ensure you make the most of every minute with activities designed to help you take advantage of everything each region has to offer.", 
                    box_img: require('../../assets/experience/outdoor.jpg')
                },
                {
                    id: 3,
                    box_head: "Wellness",
                    box_text: "Unwind at an indulgent spa. Set challenging targets with a tailor-made fitness plan. Or let our talented chefs treat you to our flavorful international menus created using the finest, carefully selected foods sourced locally from organic farms.", 
                    box_img: require('../../assets/experience/wellness.jpg')
                },

            ];
            news_array = [
                {
                    id: 1,
                    head1: "Golf Real Estate Roars Back as Vacation Homes Boom in Pandemic",
                    head2: "Bloomberg | September 2021"
                },
                {
                    id: 2,
                    head1: " 2 Golf Real Estate Roars Back as Vacation Homes Boom in Pandemic",
                    head2: "Bloomberg | September 2021"
                },
                {
                    id: 3,
                    head1: " 3Golf Real Estate Roars Back as Vacation Homes Boom in Pandemic",
                    head2: "Bloomberg | September 2021"
                },
                {
                    id: 4,
                    head1: "4 Golf Real Estate Roars Back as Vacation Homes Boom in Pandemic",
                    head2: "Bloomberg | September 2021"
                },
                {
                    id: 5,
                    head1: "5 Golf Real Estate Roars Back as Vacation Homes Boom in Pandemic",
                    head2: "Bloomberg | September 2021"
                },
                {
                    id: 6,
                    head1: "6 Golf Real Estate Roars Back as Vacation Homes Boom in Pandemic",
                    head2: "Bloomberg | September 2021"
                },
                {
                    id: 7,
                    head1: "7 Golf Real Estate Roars Back as Vacation Homes Boom in Pandemic",
                    head2: "Bloomberg | September 2021"
                },
                {
                    id: 8,
                    head1: "8 Golf Real Estate Roars Back as Vacation Homes Boom in Pandemic",
                    head2: "Bloomberg | September 2021"
                },
                {
                    id: 9,
                    head1: "9 Golf Real Estate Roars Back as Vacation Homes Boom in Pandemic",
                    head2: "Bloomberg | September 2021"
                },
                {
                    id: 10,
                    head1: "10 Golf Real Estate Roars Back as Vacation Homes Boom in Pandemic",
                    head2: "Bloomberg | September 2021"
                },
                {
                    id: 11,
                    head1: "11 Golf Real Estate Roars Back as Vacation Homes Boom in Pandemic",
                    head2: "Bloomberg | September 2021"
                },
                {
                    id: 12,
                    head1: "12 Golf Real Estate Roars Back as Vacation Homes Boom in Pandemic",
                    head2: "Bloomberg | September 2021"
                },
                {
                    id: 13,
                    head1: " 13 Golf Real Estate Roars Back as Vacation Homes Boom in Pandemic",
                    head2: "Bloomberg | September 2021"
                },
                {
                    id: 14,
                    head1: "Golf Real Estate Roars Back as Vacation Homes Boom in Pandemic",
                    head2: "Bloomberg | September 2021"
                },
                {
                    id: 14,
                    head1: "Golf Real Estate Roars Back as Vacation Homes Boom in Pandemic",
                    head2: "Bloomberg | September 2021"
                },
                {
                    id: 14,
                    head1: "Golf Real Estate Roars Back as Vacation Homes Boom in Pandemic",
                    head2: "Bloomberg | September 2021"
                },
                {
                    id: 16,
                    head1: "Golf Real Estate Roars Back as Vacation Homes Boom in Pandemic",
                    head2: "Bloomberg | September 2021"
                },
                {
                    id: 17,
                    head1: "Golf Real Estate Roars Back as Vacation Homes Boom in Pandemic",
                    head2: "Bloomberg | September 2021"
                },
                {
                    id: 18,
                    head1: "Golf Real Estate Roars Back as Vacation Homes Boom in Pandemic",
                    head2: "Bloomberg | September 2021"
                }
            ]
            
            selectedValue = this.news_array[0];
            leftclick(n: number) :void{
                if(n>=1){
                    const data = (n-2-4);
                    this.selectedValue = this.news_array[data]; 
                    console.log(data);
                }
                else{
                    this.selectedValue = this.news_array[this.news_array.length];
                    console.log(this.news_array.length);
                    // const data = n-1;
                    // this.selectedValue = this.news_array[data];
                }
            }         
            rightclick(n: number) :void{
                if(n<this.news_array.length){
                    const data = (n+3);
                    this.selectedValue = this.news_array[data];
                    console.log(data);
                }
                else{
                    this.selectedValue = this.news_array[0];
                }
            }   


            // created(){
            //     let i:number;
            //     for(i=0;i<4;i++){
            //         selectedValue = this.news_array[i]
            //     }
            // }         
}