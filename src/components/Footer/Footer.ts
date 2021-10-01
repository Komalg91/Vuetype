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