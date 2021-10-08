<template>
    <div class="video_opacity">
        <article class="video_bg">
            <video autoplay muted loop>
                <source :src="video_comp.video_src">
            </video>
            <div class="text text1">{{video_comp.video_title1}}</div>
            <div class="text text2">{{video_comp.video_title2}}</div>

        </article>
    </div>
</template>

<script type="module" src="./Video.ts">
// https://dxaurk9yhilm4.cloudfront.net/experiences_hero.mp4?mtime=20190609072805
</script>

<style lang="scss">
@import './Video'
</style>