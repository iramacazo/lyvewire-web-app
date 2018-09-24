export default class CarouselItem {
    public imageUrl: string;
    public eventTitle: string;
    public eventSummary: string;

    constructor(object: any) {
        Object.assign(this, object);
    }
}
