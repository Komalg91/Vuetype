import { Options, Vue } from 'vue-class-component';

import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';

@Options({
    components:{
        Header, Footer
    }
})
export default class Homepage extends Vue {
           public globe_array = [
                {
                    
                    world_image: require("../../assets/ourworld/northshore.jpg"),
                    world_text1: "north shore preserve",
                    world_text2: "kauai, hawaii",
                    id: 1,
                    weather: 52,
                    wind: 9.82,
                    compass: 238,
                    geon: 45.26,
                    geow: 111.
                },
                {
                    
                    world_image: require("../../assets/ourworld/jamesisland.jpg"),
                    world_text1: "james island",
                    world_text2: "southern gulf islands, british columbia, canada",
                    id: 2,
                    weather: 52,
                    wind: 9.82,
                    compass: 238,
                    geon: 45.26,
                    geow: 111.
                },
                {
                    world_image: require("../../assets/ourworld/costaterra.jpg"),
                    world_text1: "costaterra",
                    world_text2: "comporta, portugal",
                    id: 3,
                    weather: 52,
                    wind: 9.82,
                    compass: 238,
                    geon: 45.26,
                    geow: 111
                },
                {
                    world_image: require("../../assets/ourworld/barbuda.jpg"),
                    world_text1: "barbuda ocean club",
                    world_text2: "barbuda, west indies",
                    id: 4,
                    weather: 52,
                    wind: 9.82,
                    compass: 238,
                    geon: 45.26,
                    geow: 111
                },
                {
                    world_image: require("../../assets/ourworld/driftwood.jpg"),
                    world_text1: "driftwood",
                    world_text2: "austin, texas",
                    id: 5,
                    weather: 52,
                    wind: 9.82,
                    compass: 238,
                    geon: 45.26,
                    geow: 111
                },
                {
                    world_image: require("../../assets/ourworld/troubadour.jpg"),
                    world_text1: "troubadour",
                    world_text2: "nashville, tennessee",
                    id: 6,
                    weather: 52,
                    wind: 9.82,
                    compass: 238,
                    geon: 45.26,
                    geow: 111
                },
                {
                    
                    world_image: require("../../assets/ourworld/playa.jpg"),
                    world_text1: "playa grande",
                    world_text2: "rio san juan, dominican republic",
                    id: 7,
                    weather: 52,
                    wind: 9.82,
                    compass: 238,
                    geon: 45.26,
                    geow: 111
                },
                {
                    world_image: require("../../assets/ourworld/chileno.jpg"),
                    world_text1: "chileno bay",
                    world_text2: "cabo san lucas, mexico",
                    id: 8,
                    weather: 52,
                    wind: 9.82,
                    compass: 238,
                    geon: 45.26,
                    geow: 111
                },
                {
                    world_image: require("../../assets/ourworld/summit.jpg"),
                    world_text1: "the summit",
                    world_text2: "las vegas, nevada",
                    id: 9,
                    weather: 52,
                    wind: 9.82,
                    compass: 238,
                    geon: 45.26,
                    geow: 111
                },
                {
                    world_image: require("../../assets/ourworld/dunedeck.jpg"),
                    world_text1: "dune deck",
                    world_text2: "westhampton beach, NY",
                    id: 10,
                    weather: 52,
                    wind: 9.82,
                    compass: 238,
                    geon: 45.26,
                    geow: 111
                },
                {
                    world_image: require("../../assets/ourworld/silo.jpg"),
                    world_text1: "silo ridge",
                    world_text2: "amenia, new york",
                    id: 11,
                    weather: 52,
                    wind: 9.82,
                    compass: 238,
                    geon: 45.26,
                    geow: 111
                },
                {
                    world_image: require("../../assets/ourworld/makena.jpg"),
                    world_text1: "makena",
                    world_text2: "maui, hawaii",
                    id: 12,
                    weather: 52,
                    wind: 9.82,
                    compass: 238,
                    geon: 45.26,
                    geow: 111
                },
                {
                    world_image: require("../../assets/ourworld/yellowstone.jpg"),
                    world_text1: "yellowstone club",
                    world_text2: "big sky, montana",
                    id: 13,
                    weather: 52,
                    wind: 9.82,
                    compass: 238,
                    geon: 45.26,
                    geow: 111
                },
                {
                    world_image: require("../../assets/ourworld/gozzer.jpg"),
                    world_text1: "gozzer ranch",
                    world_text2: "coeur d'Alene, idaho",
                    id: 14,
                    weather: 52,
                    wind: 9.82,
                    compass: 238,
                    geon: 45.26,
                    geow: 111
                },
                {
                    world_image: require("../../assets/ourworld/eld.jpg"),
                    world_text1: "el dorado",
                    world_text2: "loa cabos, mexico",
                    id: 15,
                    weather: 52,
                    wind: 9.82,
                    compass: 238,
                    geon: 45.26,
                    geow: 111
                },
                {
                    world_image: require("../../assets/ourworld/maddison.jpg"),
                    world_text1: "north shore preserve",
                    world_text2: "kauai, hawaii",
                    id: 16,
                    weather: 52,
                    wind: 9.82,
                    compass: 238,
                    geon: 45.26,
                    geow: 111
                },
                {
                    world_image: require("../../assets/ourworld/bakers.jpg"),
                    world_text1: "north shore preserve",
                    world_text2: "kauai, hawaii",
                    id: 17,
                    weather: 52,
                    wind: 9.82,
                    compass: 238,
                    geon: 45.26,
                    geow: 111
                },
                {
                    world_image: require("../../assets/ourworld/hidwawy.jpg"),
                    world_text1: "north shore preserve",
                    world_text2: "kauai, hawaii",
                    id: 18,
                    weather: 52,
                    wind: 9.82,
                    compass: 238,
                    geon: 45.26,
                    geow: 111
                },
                {
                    world_image: require("../../assets/ourworld/mountain.jpg"),
                    world_text1: "north shore preserve",
                    world_text2: "kauai, hawaii",
                    id: 19,
                    weather: 52,
                    wind: 9.82,
                    compass: 238,
                    geon: 45.26,
                    geow: 111
                },
                {
                    world_image: require("../../assets/ourworld/kukio.jpg"),
                    world_text1: "north shore preserve",
                    world_text2: "kauai, hawaii",
                    id: 20,
                    weather: 52,
                    wind: 9.82,
                    compass: 238,
                    geon: 45.26,
                    geow: 111
                },
                {
                    world_image: require("../../assets/ourworld/vaquero.jpg"),
                    world_text1: "north shore preserve",
                    world_text2: "kauai, hawaii",
                    id: 21,
                    weather: 52,
                    wind: 9.82,
                    compass: 238,
                    geon: 45.26,
                    geow: 111
                },
                {
                    world_image: require("../../assets/ourworld/ironhouse.jpg"),
                    world_text1: "north shore preserve",
                    world_text2: "kauai, hawaii",
                    id: 22,
                    weather: 52,
                    wind: 9.82,
                    compass: 238,
                    geon: 45.26,
                    geow: 111
                },
                {
                    world_image: require("../../assets/ourworld/cordevalle.jpg"),
                    world_text1: "north shore preserve",
                    world_text2: "kauai, hawaii",
                    id: 23,
                    weather: 52,
                    wind: 9.82,
                    compass: 238,
                    geon: 45.26,
                    geow: 111
                },
                {
                    world_image: require("../../assets/ourworld/estancia.jpg"),
                    world_text1: "north shore preserve",
                    world_text2: "kauai, hawaii",
                    id: 24,
                    weather: 52,
                    wind: 9.82,
                    compass: 238,
                    geon: 45.26,
                    geow: 111
                },

                
            ];

            selectedValue = this.globe_array[1];
            count= 0;
            id= 0;
            leftclick(selectedValue: number){
                if(selectedValue==1){
                    this.count = this.globe_array.length;
                }
                else{
                    this.count = selectedValue - 1;
                    console.log(this.count)
                }
                this.id = this.count;
                this.selectedValue = this.globe_array[this.id];

            }
}