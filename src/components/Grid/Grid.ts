import {Options, Vue} from 'vue-class-component';
@Options({
    props:{
        gridlist:{
            type: Object
        }
    },
})
export default class Grid extends Vue {}