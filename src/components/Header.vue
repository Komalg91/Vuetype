<template>
    <header class="gallery_header">
        <div class="left_header">
            <img src="../assets/logod.png" alt="" srcset="">
            <!-- <span class="discovery_header_text1">Discovery</span>
            <span class="discovery_header_text2">Land Company</span> -->

        </div>
        
        <nav class="nav_header">
            <ul class="nav_ul">
                <li class="nav_li" v-for="(items,index) in header_items" :key= "index"><a href="#" class="nav_li_link">{{items.header_text}}</a></li>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
            

        </nav>
        
    </header>
</template>

<script lang="ts">
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
            ]
        }
    }
}
</script>

<style lang="scss">
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
.left_header img{
    width: 15vw;
}
.gallery_header{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;    
    height: 8.1rem;
    top: 0;
    left: 0;   
    position: absolute;
    padding: 0% 7%; 
}
.nav_header {
  
    display: flex;
    justify-content: space-between;
    align-items: center; 
}
.nav_ul{
    display: flex;
    padding: 0;
}
.nav_li{
    list-style: none;
    margin-right: 1.5rem;
    display: block;  
}
.gallery_header, .gallery_header a{
    color: #fff;
    z-index: 100;
    transition: background-color 1s ease 0s;
  }
li {
    font-size: 0.75rem;
}
ul{
    margin: 0;
}
.nav_header a{
    display: block;
}
.nav_li_link{
    color: #490D40;
}
.nav_header a{
  display: inline-block;
  position: relative;
}

.nav_header a:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: #fff;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.nav_header a:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
.hamburger span{
    
    display: block;
 width: 1.5vw;
  height: 2px;
  margin-bottom: 5px;  
  background: #fff;
  border-radius: 3px;
  
  z-index: 1;
  
//   transform-origin: 4px 0px;
  
//   transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
//               background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
//               opacity 0.55s ease;
}
.hamburger span:nth-child(3){
    width: 60%;
    margin-left: auto;
}

</style>
