export default class listhelementmodel {
    constructor(data: any) {
        this.Description = data.description;
        this.DateTime = data.dateTime;
        this.Color = data.color;
    }

    Description: string;
    DateTime: string;
    Color: string;
}