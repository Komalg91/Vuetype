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

<script type="module" src="./ourworld.ts"></script>

<style lang="scss">
@import './ourworld.scss';
</style>