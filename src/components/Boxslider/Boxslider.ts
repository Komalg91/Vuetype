import {Options, Vue} from 'vue-class-component';

@Options({
})

export default class Box extends Vue{
    public box_data_slider = [
        {
            id: 1,
            box_head_news: "News",
            box_head: "Discovery’s newest property in Kaua’i North Shore Preserve",
            box_text: "Discovery Land Company is excited to announce our 25th residential club community on the majestic North Shore of Kaua’i. North Shore Preserve, a one-of-a-kind residential community, spans one thousand acres at the base of the mountains in the pastoral Hanalei valley. This newly re-imagined, low-density project is a secluded and peaceful island oasis with limited initial homesite and hale offerings.", 
            box_img: require('../../assets/Press/press1.jpg')
        },
        {
            id: 2,
            box_head_news: "News",
            box_head: "James island Discovery's Newest Property",
            box_text: "Our signature Outdoor Pursuits program is designed for families to create memories together. Whether you’re trying a new sport or taking a day trip, our team will ensure you make the most of every minute with activities designed to help you take advantage of everything each region has to offer.", 
            box_img: require('../../assets/Press/press2.jpg')
        },
        {
            id: 3,
            box_head_news: "News",
            box_head: "Discovery's Newest Property",
            box_text: "Discovery Land Company, the world’s leading developer of luxury private residential communities, clubs and resorts, has announced its 23rd property and first in Europe.", 
            box_img: require('../../assets/Press/press3.jpg')
        },
        {
            id: 4,
            box_head_news: "News",
            box_head: "Troubadour To Open Golf Course Fall 2019",
            box_text: "Troubadour Golf & Field Club, a Discovery Land Company community, is pleased to announce the opening of its 18-hole Tom Fazio-designed golf course this fall.", 
            box_img: require('../../assets/Press/press4.jpg')
        },

    ];
    selectedValue = this.box_data_slider[0];
    leftclick(n: number) :void{
        if(n>=1){
            const data = n-2;
            this.selectedValue = this.box_data_slider[data]; 
            console.log(data);
        }
        else{
            this.selectedValue = this.box_data_slider[this.box_data_slider.length];
            console.log(this.box_data_slider.length);
            // const data = n-1;
            // this.selectedValue = this.box_data_slider[data];
        }
    }         
    rightclick(n: number) :void{
        if(n<this.box_data_slider.length){
            const data = (n);
            this.selectedValue = this.box_data_slider[data];
            console.log(data);
        }
        else{
            this.selectedValue = this.box_data_slider[0];
        }
    }            
}