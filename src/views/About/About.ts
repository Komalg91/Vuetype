import { Options, Vue } from "vue-class-component";
import Header from '@/components/Header/Header.vue'
import Para from '@/components/Para/Para.vue';
import Footer from '@/components/Footer/Footer.vue'
import Grid from '@/components/Grid/Grid.vue'
import Griddesign from '@/components/Griddesign/Griddesign.vue'
import Gridbox from '@/components/Gridbox/Gridbox.vue'
import Imagebg from '@/components/Imagebg/Imagebg.vue'



@Options({
    components:{
        Header, Para, Footer, Grid, Gridbox, Griddesign, Imagebg
    }
})
export default class About extends Vue {
    data() {
        return{
            image_exp: {
                image_title1: "Creating your",
                image_title2: "perfect world",
                image_src: require('../../assets/about.jpg')
            },
            img_array: [
                {
                    id: 1,
                    world_image: require("../../assets/ourworld/northshore.jpg"),
                    world_text1: "north shore preserve",
                    world_text2: "kauai, hawaii"
                },
                {
                    id: 2,
                    world_image: require("../../assets/ourworld/jamesisland.jpg"),
                    world_text1: "james island",
                    world_text2: "southern gulf islands, british columbia, canada"
                },
                {
                    id: 3,
                    world_image: require("../../assets/ourworld/costaterra.jpg"),
                    world_text1: "costaterra",
                    world_text2: "comporta, portugal"
                },
                {
                    id: 4,
                    world_image: require("../../assets/ourworld/barbuda.jpg"),
                    world_text1: "barbuda ocean club",
                    world_text2: "barbuda, west indies"
                },
                {
                    id: 5,
                    world_image: require("../../assets/ourworld/driftwood.jpg"),
                    world_text1: "driftwood",
                    world_text2: "austin, texas"
                },
                {
                    id: 6,
                    world_image: require("../../assets/ourworld/troubadour.jpg"),
                    world_text1: "troubadour",
                    world_text2: "nashville, tennessee"
                },
                {
                    id: 7,
                    world_image: require("../../assets/ourworld/playa.jpg"),
                    world_text1: "playa grande",
                    world_text2: "rio san juan, dominican republic"
                },
                {
                    id: 8,
                    world_image: require("../../assets/ourworld/chileno.jpg"),
                    world_text1: "chileno bay",
                    world_text2: "cabo san lucas, mexico"
                },
                {
                    id: 9,
                    world_image: require("../../assets/ourworld/summit.jpg"),
                    world_text1: "the summit",
                    world_text2: "las vegas, nevada"
                },
                {
                    id: 10,
                    world_image: require("../../assets/ourworld/dunedeck.jpg"),
                    world_text1: "dune deck",
                    world_text2: "westhampton beach, NY"
                },
                {
                    id: 11,
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

                
            ],
            para_text: "Founded in 1994 by Mike Meldman, Discovery Land Company is a US-based real estate developer and operator of private residential club communities and resorts with a world-renowned portfolio of domestic and international properties.",
            gridboxobj:
            {
                img_expgrid: require('../../assets/whatwedo.jpg'),
                head_expgrid: "Our Mission",
                head2_expgrid: "",
                para1_expgrid: "We don’t build buildings, but rather we build settings where families can create intergenerational memories and enrich their lives in exquisite and untouched sanctuaries. Everything we do is driven by the fundamental desire to create spaces where families can be together.",
                para2_expgrid: "These settings offer a relaxed and comfortable sense of community featuring outstanding clubhouses, incredible residential offerings, premier golf courses, welcoming staff, world-class culinary offerings and our custom Outdoor Pursuits program; all offering the highest of service standards to enrich your experience."
            },
            gridlistobj:{
                img1_grid: require('../../assets/builder2.jpg'),
                img2_grid: require('../../assets/builders.jpg'),
                head_grid: "Discovery Builders",
                text_grid: "Every Discovery property is wonderfully in-tune with its natural surroundings - a harmonious blend of the architecturally impressive with the environmentally sensitive. And your every expectation will be met, with our meticulous eye for detail matching outstanding levels of craftsmanship and master building."
            },
            griddesignobj:{
                img1_griddesign: require('../../assets/design2.jpg'),
                img2_griddesign: require('../../assets/design1.jpg'),
                head_griddesign: "Discovery Design",
                text_griddesign:"See the beauty in every corner of your new, bespoke home away from home. From fabrics and furniture pieces to floorplans, our professional designers will collaborate closely with you to create an interior living space which reflects your style and unique tastes as well as perfectly complementing your lifestyle."
            }
        }
    }
}