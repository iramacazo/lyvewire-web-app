import sampleImage from "../assets/images/header.jpg";
import CarouselItem from "../entities/carousel_item";

const carousels = [
    {
        eventSummary: "Hi obama we miss you",
        eventTitle: "The Donald Impeached",
        imageUrl: sampleImage,
    },
    {
        eventSummary: "Ol lizzy kicked the bucket",
        eventTitle: "Price Philip Coronation",
        imageUrl: sampleImage,
    },
    {
        eventSummary: "Grab all the bags you want",
        eventTitle: "Waterfield bankruptcy election",
        imageUrl: sampleImage,
    },
];

export default class CarouselService {
    public static async get(): Promise<CarouselItem[]> {
        return carousels.map(item => new CarouselItem(item));
    }
}
