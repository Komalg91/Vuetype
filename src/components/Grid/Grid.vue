<template>
     <div class="section8_container">
         <div class="row_grid_new">
            <div class="section8">
                <div class="para8">
                    <h2>{{gridlist.head_grid}}</h2>
                    <p>{{gridlist.text_grid}}</p>
                </div>
                 <div class="section8_left_img">
                    <img :src="gridlist.img2_grid" alt="" srcset="" class="img2_new">
                </div> 
                <div class="section8_right_img">
                    <img :src="gridlist.img1_grid" class="img1" alt="" srcset="">
                </div>
                
               
                
                
            </div>
        </div>
    </div>
</template>

<script type="module" src='./Grid.ts'>
</script>
<style lang="scss">
@import './Grid.scss';
</style>