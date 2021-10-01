<template>
        <div class="box">
            <div class="slide-img">
            
                <img src="../assets/ourworld/northshore.jpg" alt="" srcset="">
            
            <div class="slide-img">
                <img src="../assets/ourworld/northshore.jpg" alt="" srcset="">
            </div>
            <div class="slide-img">
                <img src="../assets/ourworld/northshore.jpg" alt="" srcset="">
            </div>
            <div class="slide-img">
                <img src="../assets/ourworld/northshore.jpg" alt="" srcset="">
            </div>
            <div class="slide-img">
                <img src="../assets/ourworld/northshore.jpg" alt="" srcset="">
            </div>
            <div class="slide-img">
                <img src="../assets/ourworld/northshore.jpg" alt="" srcset="">
            </div>
            <div class="slide-img">
                <img src="../assets/ourworld/northshore.jpg" alt="" srcset="">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';

@Options({
    components:{
        Header, Footer
    }
})
export default class Homepage extends Vue {
            img_array = [
                {
                    id: 1,
                    world_image: require("../assets/ourworld/northshore.jpg"),
                    world_text1: "north shore preserve",
                    world_text2: "kauai, hawaii"
                },
                {
                    id: 2,
                    world_image: require("../assets/ourworld/jamesisland.jpg"),
                    world_text1: "james island",
                    world_text2: "southern gulf islands, british columbia, canada"
                },
                {
                    id: 3,
                    world_image: require("../assets/ourworld/costaterra.jpg"),
                    world_text1: "costaterra",
                    world_text2: "comporta, portugal"
                },
                {
                    id: 4,
                    world_image: require("../assets/ourworld/barbuda.jpg"),
                    world_text1: "barbuda ocean club",
                    world_text2: "barbuda, west indies"
                },
                {
                    id: 5,
                    world_image: require("../assets/ourworld/driftwood.jpg"),
                    world_text1: "driftwood",
                    world_text2: "austin, texas"
                },
                {
                    id: 6,
                    world_image: require("../assets/ourworld/troubadour.jpg"),
                    world_text1: "troubadour",
                    world_text2: "nashville, tennessee"
                },
                {
                    id: 7,
                    world_image: require("../assets/ourworld/playa.jpg"),
                    world_text1: "playa grande",
                    world_text2: "rio san juan, dominican republic"
                },
                {
                    id: 8,
                    world_image: require("../assets/ourworld/chileno.jpg"),
                    world_text1: "chileno bay",
                    world_text2: "cabo san lucas, mexico"
                },
                {
                    id: 9,
                    world_image: require("../assets/ourworld/summit.jpg"),
                    world_text1: "the summit",
                    world_text2: "las vegas, nevada"
                },
                {
                    id: 10,
                    world_image: require("../assets/ourworld/dunedeck.jpg"),
                    world_text1: "dune deck",
                    world_text2: "westhampton beach, NY"
                },
                {
                    id: 11,
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

                
            ];
}
</script>


<style lang="scss">
.box{
    width: 300px;
    border-radius: 10px;
    // overflow: hidden;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: 25px;
}
.slide-img{
    height: 450px;
}
.slide-img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-sizing: border-box;
}

// body {
// 	align-items: center;
// 	background: #E3E3E3;
// 	display: flex;
// 	height: 100vh;
// 	justify-content: center;
// }

// $animationSpeed: 40s;

// // Animation
// @keyframes scroll {
// 	0% { transform: translateX(0); }
// 	100% { transform: translateX(calc(-250px * 7))}
// }


// .slider {
//     position: relative;
//     width: 100vw;
//     height: 100vh;
// }
// .slider .slide-track {
//     position: absolute;
//     width: 700%;
//     top: 0;
//     left: 0;
//     overflow: hidden;
//     animation: slider 26s infinite;
// }
// .slider .slide-track .slide {
//     position: relative;
//     width: 33%;
//     margin-left: 10px;
//     height: 100%;
//     float: left;
//     overflow: hidden
// }
// .slider .slide-track .slide img {
//   display: block;
//   width: 100%;
//   height: 100%
// }
// @keyframes slider {
//     0%, 25%, 100%{left: 0}
    
//     30%, 55%{left: -100%}
    
//     60%, 85%{left: -200%}
// }

// .slider {
//   height:500px;
// 	margin: auto;
// 	overflow:hidden;
// 	position: relative;
// 	width: 800px;

//     &::before,
//     &::after{
//         content: "";
//         height: 100px;
//         position: absolute;
//         width: 200px;
//         z-index: 2;
//         background-color: red;
//     }

//     &::after {
// 		right: 0;
// 		top: 0;
// 		transform: rotateZ(180deg);
//         background-color: cadetblue;
// 	}
//     &::before {
// 		left: 0;
// 		top: 0;
//         background-color: chartreuse;
// 	}
//     .slide-track {
// 		animation: scroll $animationSpeed linear infinite;
// 		display: flex;
// 		width: calc(500px * 14);
//         background-color: darkblue;
// 	}
	
// 	.slide {
// 		height: 300px;
// 		width: 500px;
//         // margin-left: 20%;
//         background-color: darkorchid;
// 	}

// }


// .slides {
//   display: flex; 
//   overflow-x: auto;
// }
</style>