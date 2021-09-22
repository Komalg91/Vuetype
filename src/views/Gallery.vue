<template>
  <div class="gallery_container">
     <header class="gallery_header">
        <div class="left_header">
            <span class="discovery_header_text1">Discovery</span>
            <span class="discovery_header_text2">Land Company</span>

        </div>
        
        <nav class="nav_header">
            <ul class="nav_ul">
                <li class="nav_li"><a href="#"> About</a></li>
                <li class="nav_li"><a href="#">Our World</a></li>
                <li class="nav_li"><a href="#">Experiences</a></li>
                <li class="nav_li"><a href="#">Gallery</a></li>
                <li class="nav_li"><a href="#">Press</a></li>

            </ul>
        </nav>
        
    </header>
    <main>
        <article>
            <div class="header_bg_img">
                <!-- <img src="https://dxaurk9yhilm4.cloudfront.net/images/7383/jael-rodriguez-AkF5NT0sZy8-unsplash-1-1_210301_200939_35d31212c7a2d4dccdff99afa3f88af5.jpg" alt="" srcset=""> -->
            </div>
        </article>
        <article class="gallery_item1">
            
            <article class="gallery_item1_content">
                <a href="#">
                    <figure class="gallery_item_figure">
                        <img src="https://dxaurk9yhilm4.cloudfront.net/images/7390/Stocksy_txp3615512ad2e200_OriginalDelivery_1580323-1_210301_201432_d169f13de117664acdaa1543841b7c16.jpg" alt="Nature Image" srcset="">               
                    </figure>
                    <h2 class="gallery_item_text">Outdoor Pursuits</h2>
                </a>
            </article>
            <article class="gallery_item1_content">
                <a href="#">
                    <figure class="gallery_item_figure">
                        <img src="https://dxaurk9yhilm4.cloudfront.net/images/7386/img_210122_130752_1_d169f13de117664acdaa1543841b7c16.jpg" alt="Nature Image" srcset="">
                    </figure>
                    <h2 class="gallery_item_text">Golf</h2>
                </a>
            </article>
            <article class="gallery_item1_content">
                <a href="#">
                    <figure class="gallery_item_figure">
                        <img src="https://dxaurk9yhilm4.cloudfront.net/images/7394/preview-30_210301_201612_d169f13de117664acdaa1543841b7c16.jpeg" alt="Nature Image" srcset="">
                    </figure>
                    <h2 class="gallery_item_text">Lifestyle</h2>
                </a>
            </article>
            <article class="gallery_item1_content">
                <a href="#">
                    <figure class="gallery_item_figure">
                        <img src="https://dxaurk9yhilm4.cloudfront.net/images/7398/Playa-Grande14_DJI_0965-1-1_210301_201716_d169f13de117664acdaa1543841b7c16.jpg" alt="Nature Image" srcset="">               
                    </figure>
                    <h2 class="gallery_item_text">Landscapes</h2>
                </a>
            </article>
            <article class="gallery_item1_content">
                <a href="#">
                    <figure class="gallery_item_figure">
                        <img src="https://dxaurk9yhilm4.cloudfront.net/images/7406/Wellness-gallery-1_11014826b3e36b3697374f276a89b517-2_210301_202121_d169f13de117664acdaa1543841b7c16.jpg" alt="Nature Image" srcset="">
                    </figure>
                    <h2 class="gallery_item_text">Clubhouses</h2>
                </a>
            </article>
            <article class="gallery_item1_content">
                <a href="#">
                    <figure class="gallery_item_figure">
                        <img src="https://dxaurk9yhilm4.cloudfront.net/images/7402/golf-club-house_d3867277feb154defec9b24a5714fadb-1_210301_201855_d169f13de117664acdaa1543841b7c16.jpg" alt="Nature Image" srcset="">
                    </figure>
                    <h2 class="gallery_item_text">Wellness</h2>
                </a>
            </article>
        </article>
    </main>
  </div>
</template>

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
// .gallery_container{
//     min-width: 100%;

// }
.header_bg_img{
    background-color: #490D40;
   background: url(https://dxaurk9yhilm4.cloudfront.net/images/7383/jael-rodriguez-AkF5NT0sZy8-unsplash-1-1_210301_200939_35d31212c7a2d4dccdff99afa3f88af5.jpg) no-repeat center center;
   background-size: cover;
   height: 65vh;
   margin-top: -20px;
 
//     // position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
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
    position: fixed;
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
figure{
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: relative;
}
.gallery_item1{
    display: grid;
    grid-template-columns: repeat(3,1fr);
}
.gallery_item1_content{
    background-color: #000;
}
.gallery_item1_content img{
    width: 100%;
    left: 0;
    top: 0;
    height: 100%;
    object-fit: cover;
}
.gallery_item_text{
    text-align: center;
    color: #fff;
    font-family: Georgia, 'Times New Roman', Times, serif;
    padding: 3rem 1.5rem;
    margin: 0;
    font-size: 1em;
    white-space: nowrap;
}
a{
    text-decoration: none;
}

@media screen and (max-width: 1000px){
    .gallery_item1{
        grid-template-columns: repeat(2,1fr);
    }
}
@media screen and (max-width: 500px){
    .gallery_item1{
        grid-template-columns: repeat(1,1fr);
    }
}


</style>