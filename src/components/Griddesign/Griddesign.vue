<template>
     <div class="section6_container">
         <div class="row_grid">
            <div class="section6">
                 <div class="section6_left_img">
                    <img :src="gridlistdesign.img2_griddesign" alt="" srcset="" class="img2">
                </div> 
                <div class="para6">
                    <h2>{{gridlistdesign.head_griddesign}}</h2>
                    <p>{{gridlistdesign.text_griddesign}}</p>
                </div>
                <div class="blankcol"></div>
                <div class="section6_right_img">
                    <img :src="gridlistdesign.img1_griddesign" class="img1" alt="" srcset="">
                </div>
                
                
                
                
               
                
                
            </div>
        </div>
    </div>
</template>

<script type="module" src='./Griddesign.ts'>
</script>
<style lang="scss">
@import './Griddesign.scss';
</style>