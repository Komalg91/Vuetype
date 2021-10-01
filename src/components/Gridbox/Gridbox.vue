<template>
     <div class="section2_container">
        <div class="row_exp">
        <div class="section2">
            <div class="section2_left">
            <!-- <h2>Exclusive to</h2> -->
            <h2>{{gridboxlist.head_expgrid}}</h2>
            <div class="para2">
                <p>
                   {{gridboxlist.para1_expgrid}}
                </p>
                <p>{{gridboxlist.para2_expgrid}}
                </p>
            </div>
        </div>
        <div class="section2_right">
            <img :src="gridboxlist.img_expgrid" alt="" srcset="">
        </div>
    </div> 
    </div>
</div> 
</template>

<script type="module" src="./Gridbox">
</script>

<style lang="scss">
@import './Gridbox'
</style>