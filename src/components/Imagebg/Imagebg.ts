import {Options, Vue} from 'vue-class-component';

@Options({
    props:{
        itemlist:{
            type: Object
        },
        image_comp:{
            type: Object
        }
    },
})


export default class Imagebg extends Vue{
    // mounted(){
    //     console.log(this.video_comp);
    // }
}