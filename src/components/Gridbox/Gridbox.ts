
import {Options, Vue} from 'vue-class-component';

@Options({
    props:{
        gridboxlist:{
            type: Object
        },
    },
})

export default class Box extends Vue{}