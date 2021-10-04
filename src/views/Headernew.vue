<template>
  <nav class="navbar">
    <div class="nav_header">
      <div class="left_nav">
        <img src="../assets/logod.png" alt="" srcset="">
      </div>
      <div class="right_nav">
          <input type="checkbox" name="" id="nav_toggle">
        <div class="hamburger">
          <label for="nav_toggle">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </label>
        </div>
        
          <ul class="nav_ul">
            <li class="nav_li" v-for="(items,index) in header_items" :key="index">
              <a href="#" class="nav_a">{{items.header_text}}</a>
            </li>
          </ul>
        </div>
      </div>
  </nav>


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
@import './Headernew.scss';
</style>
