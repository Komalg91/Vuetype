import {Options, Vue} from 'vue-class-component';

@Options({
    props:{
        paralists:{
            type: String
        },
    },
})

export default class Para extends Vue{}