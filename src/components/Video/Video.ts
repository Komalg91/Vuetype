import {Options, Vue} from 'vue-class-component';

@Options({
    props:{
        itemlist:{
            type: Object
        },
        video_comp:{
            type: Object
        }
    },
})


export default class Video extends Vue{
    // mounted(){
    //     console.log(this.video_comp);
    // }
}