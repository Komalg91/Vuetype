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
                    world_image: require("../../assets/ourworld/northshore.jpg"),
                    world_text1: "north shore preserve",
                    world_text2: "kauai, hawaii"
                },
                {
                    world_image: require("../../assets/ourworld/jamesisland.jpg"),
                    world_text1: "james island",
                    world_text2: "southern gulf islands, british columbia, canada"
                },
                {
                    world_image: require("../../assets/ourworld/costaterra.jpg"),
                    world_text1: "costaterra",
                    world_text2: "comporta, portugal"
                },
                {
                    world_image: require("../../assets/ourworld/barbuda.jpg"),
                    world_text1: "barbuda ocean club",
                    world_text2: "barbuda, west indies"
                },
                {
                    world_image: require("../../assets/ourworld/driftwood.jpg"),
                    world_text1: "driftwood",
                    world_text2: "austin, texas"
                },
                {
                    world_image: require("../../assets/ourworld/troubadour.jpg"),
                    world_text1: "troubadour",
                    world_text2: "nashville, tennessee"
                },
                {
                    world_image: require("../../assets/ourworld/playa.jpg"),
                    world_text1: "playa grande",
                    world_text2: "rio san juan, dominican republic"
                },
                {
                    world_image: require("../../assets/ourworld/chileno.jpg"),
                    world_text1: "chileno bay",
                    world_text2: "cabo san lucas, mexico"
                },
                {
                    world_image: require("../../assets/ourworld/summit.jpg"),
                    world_text1: "the summit",
                    world_text2: "las vegas, nevada"
                },
                {
                    world_image: require("../../assets/ourworld/dunedeck.jpg"),
                    world_text1: "dune deck",
                    world_text2: "westhampton beach, NY"
                },
                {
                    world_image: require("../../assets/ourworld/silo.jpg"),
                    world_text1: "silo ridge",
                    world_text2: "amenia, new york"
                },
                {
                    world_image: require("../../assets/ourworld/makena.jpg"),
                    world_text1: "makena",
                    world_text2: "maui, hawaii"
                },
                {
                    world_image: require("../../assets/ourworld/yellowstone.jpg"),
                    world_text1: "yellowstone club",
                    world_text2: "big sky, montana"
                },
                {
                    world_image: require("../../assets/ourworld/gozzer.jpg"),
                    world_text1: "gozzer ranch",
                    world_text2: "coeur d'Alene, idaho"
                },
                {
                    world_image: require("../../assets/ourworld/eld.jpg"),
                    world_text1: "el dorado",
                    world_text2: "loa cabos, mexico"
                },
                {
                    world_image: require("../../assets/ourworld/maddison.jpg"),
                    world_text1: "north shore preserve",
                    world_text2: "kauai, hawaii"
                },
                {
                    world_image: require("../../assets/ourworld/bakers.jpg"),
                    world_text1: "north shore preserve",
                    world_text2: "kauai, hawaii"
                },
                {
                    world_image: require("../../assets/ourworld/hidwawy.jpg"),
                    world_text1: "north shore preserve",
                    world_text2: "kauai, hawaii"
                },
                {
                    world_image: require("../../assets/ourworld/mountain.jpg"),
                    world_text1: "north shore preserve",
                    world_text2: "kauai, hawaii"
                },
                {
                    world_image: require("../../assets/ourworld/kukio.jpg"),
                    world_text1: "north shore preserve",
                    world_text2: "kauai, hawaii"
                },
                {
                    world_image: require("../../assets/ourworld/vaquero.jpg"),
                    world_text1: "north shore preserve",
                    world_text2: "kauai, hawaii"
                },
                {
                    world_image: require("../../assets/ourworld/ironhouse.jpg"),
                    world_text1: "north shore preserve",
                    world_text2: "kauai, hawaii"
                },
                {
                    world_image: require("../../assets/ourworld/cordevalle.jpg"),
                    world_text1: "north shore preserve",
                    world_text2: "kauai, hawaii"
                },
                {
                    world_image: require("../../assets/ourworld/estancia.jpg"),
                    world_text1: "north shore preserve",
                    world_text2: "kauai, hawaii"
                },
                {
                    world_image: require("../../assets/ourworld/estancia.jpg"),
                    world_text1: "north shore preserve",
                    world_text2: "kauai, hawaii"
                },

                
            ]
        }
    }
}