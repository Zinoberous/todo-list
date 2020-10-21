export default class Listheadmodel {
    constructor(data: any) {
        this.Title = data.title;
        this.Color = data.hColor;
        this.Icon =  data.icon;
    }

    Title: string;
    Color: string;
    Icon: string;
}