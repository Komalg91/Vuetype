import { Vue } from 'vue-class-component';

export default class Header extends Vue {
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
            header_items_nav: [
                {
                    header_text: "Magazine",
                },
                {
                    header_text: "Company",
                },
                {
                    header_text: "Foundation",
                },
                {
                    header_text: "Career",
                }
            ]
        }
    }
}