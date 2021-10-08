<template>
    <div class="image_opacity">
        <article class="image_bg">
            <img :src="image_comp.image_src">
            <div class="text text1">{{image_comp.image_title1}}</div>
            <div class="text text2">{{image_comp.image_title2}}</div>
        </article>
    </div>
</template>

<script type="module" src="./Imagebg.ts">
// https://dxaurk9yhilm4.cloudfront.net/experiences_hero.mp4?mtime=20190609072805
</script>

<style lang="scss">
@import './Imagebg'
</style>