<template>
  <div class="world_container">
     <Header/>
    <main>
        
        <article class="world_item1">
            <article class="world_item1_content" v-for="(items,index) in img_array" :key="index">
                <a href="#"> 
                    <figure class="world_item_figure">
                        <img :src="items.world_image" alt="" srcset="">
 
                    </figure>
                    <h2 class="world_item_text1">{{items.world_text1}}</h2>
                    <h2 class="world_item_text2">{{items.world_text2}}</h2>
                </a>
            </article>
        </article>
    </main>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

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
                    world_image: require("../assets/ourworld/northshore.jpg"),
                    world_text1: "north shore preserve",
                    world_text2: "kauai, hawaii"
                },
                {
                    world_image: require("../assets/ourworld/jamesisland.jpg"),
                    world_text1: "james island",
                    world_text2: "southern gulf islands, british columbia, canada"
                },
                {
                    world_image: require("../assets/ourworld/costaterra.jpg"),
                    world_text1: "costaterra",
                    world_text2: "comporta, portugal"
                },
                {
                    world_image: require("../assets/ourworld/barbuda.jpg"),
                    world_text1: "barbuda ocean club",
                    world_text2: "barbuda, west indies"
                },
                {
                    world_image: require("../assets/ourworld/driftwood.jpg"),
                    world_text1: "driftwood",
                    world_text2: "austin, texas"
                },
                {
                    world_image: require("../assets/ourworld/troubadour.jpg"),
                    world_text1: "troubadour",
                    world_text2: "nashville, tennessee"
                },
                {
                    world_image: require("../assets/ourworld/playa.jpg"),
                    world_text1: "playa grande",
                    world_text2: "rio san juan, dominican republic"
                },
                {
                    world_image: require("../assets/ourworld/chileno.jpg"),
                    world_text1: "chileno bay",
                    world_text2: "cabo san lucas, mexico"
                },
                {
                    world_image: require("../assets/ourworld/summit.jpg"),
                    world_text1: "the summit",
                    world_text2: "las vegas, nevada"
                },
                {
                    world_image: require("../assets/ourworld/dunedeck.jpg"),
                    world_text1: "dune deck",
                    world_text2: "westhampton beach, NY"
                },
                {
                    world_image: require("../assets/ourworld/silo.jpg"),
                    world_text1: "silo ridge",
                    world_text2: "amenia, new york"
                },
                {
                    world_image: require("../assets/ourworld/makena.jpg"),
                    world_text1: "makena",
                    world_text2: "maui, hawaii"
                },
                {
                    world_image: require("../assets/ourworld/yellowstone.jpg"),
                    world_text1: "yellowstone club",
                    world_text2: "big sky, montana"
                },
                {
                    world_image: require("../assets/ourworld/gozzer.jpg"),
                    world_text1: "gozzer ranch",
                    world_text2: "coeur d'Alene, idaho"
                },
                {
                    world_image: require("../assets/ourworld/eld.jpg"),
                    world_text1: "el dorado",
                    world_text2: "loa cabos, mexico"
                },
                {
                    world_image: require("../assets/ourworld/maddison.jpg"),
                    world_text1: "north shore preserve",
                    world_text2: "kauai, hawaii"
                },
                {
                    world_image: require("../assets/ourworld/bakers.jpg"),
                    world_text1: "north shore preserve",
                    world_text2: "kauai, hawaii"
                },
                {
                    world_image: require("../assets/ourworld/hidwawy.jpg"),
                    world_text1: "north shore preserve",
                    world_text2: "kauai, hawaii"
                },
                {
                    world_image: require("../assets/ourworld/mountain.jpg"),
                    world_text1: "north shore preserve",
                    world_text2: "kauai, hawaii"
                },
                {
                    world_image: require("../assets/ourworld/kukio.jpg"),
                    world_text1: "north shore preserve",
                    world_text2: "kauai, hawaii"
                },
                {
                    world_image: require("../assets/ourworld/vaquero.jpg"),
                    world_text1: "north shore preserve",
                    world_text2: "kauai, hawaii"
                },
                {
                    world_image: require("../assets/ourworld/ironhouse.jpg"),
                    world_text1: "north shore preserve",
                    world_text2: "kauai, hawaii"
                },
                {
                    world_image: require("../assets/ourworld/cordevalle.jpg"),
                    world_text1: "north shore preserve",
                    world_text2: "kauai, hawaii"
                },
                {
                    world_image: require("../assets/ourworld/estancia.jpg"),
                    world_text1: "north shore preserve",
                    world_text2: "kauai, hawaii"
                },

                
            ]
        }
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Martel+Sans:wght@200&display=swap');
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
// .gallery_container{
//     min-width: 100%;

// }

figure{
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: relative;
}
.world_item1{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 4.5rem 1rem;
    background-color: #000;
    padding: 13.5rem 1rem 6rem;
}

.world_item1_content img{
    width: 100%;
    left: 0;
    top: 0;
    height: 100%;
    object-fit: cover;
}
.world_item_text1{
    text-align: left;
    color: #fff;
    font-family: 'Martel Sans', sans-serif;
    margin: 1rem 0 0 0;
    font-size: 0.85rem;
    white-space: nowrap;
    text-transform: uppercase;
    line-height: 1.1;
}
.world_item_text2{
    text-align: left;
    color: #777;
    font-family: 'Martel Sans', sans-serif;
    margin: 0.2rem 0 0 0;
    font-size: 0.8rem;
    text-transform: capitalize;
    line-height: 1.3;
}
a{
    text-decoration: none;
}
.world_footer_container{
    background-color: #161f1e;
    padding-left: calc(8vw * .75);
    padding-right: calc(8vw * .75);
    position: relative;
    
}

@media screen and (max-width: 1000px){
    .world_item1{
        grid-template-columns: repeat(3,1fr);
    }
   
}
@media screen and (max-width: 700px){
    .world_item1{
        grid-template-columns: repeat(2, 1fr);
    }
}
@media screen and (max-width: 500px){
    .world_item1{
        grid-template-columns: repeat(1,1fr);
    }
}


</style>