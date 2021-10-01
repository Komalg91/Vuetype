import { Options, Vue } from 'vue-class-component';

import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';

@Options({
    components:{
        Header, Footer
    }
})
export default class Gallery extends Vue {
    data() {
        return{
            img_array: [
                {
                    gallery_image: require("../../assets/gallery/outdoor.jpg"),
                    gallery_text: "Outdoor Pursuits"
                },
                {
                    gallery_image: require("../../assets/gallery/golf.jpg"),
                    gallery_text: "Golf"
                },
                {
                    gallery_image: require("../../assets/gallery/lifestyle.jpeg"),
                    gallery_text: "Lifestyle"
                },
                {
                    gallery_image: require("../../assets/gallery/landscapes.jpg"),
                    gallery_text: "Landscapes"
                },
                {
                    gallery_image: require("../../assets/gallery/clubhouses.jpg"),
                    gallery_text: "Clubhouses"
                },
                {
                    gallery_image: require("../../assets/gallery/wellness.jpg"),
                    gallery_text: "Wellness"
                }
            ]
        }
    }
}
