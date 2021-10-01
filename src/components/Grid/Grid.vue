<template>
     <div class="section6_container">
         <div class="row_grid">
            <div class="section6">
                <div class="para6">
                    <h2>{{gridlist.head_grid}}</h2>
                    <p>{{gridlist.text_grid}}</p>
                </div>
                 <div class="section6_left_img">
                    <img :src="gridlist.img2_grid" alt="" srcset="" class="img2">
                </div> 
                <div class="section6_right_img">
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