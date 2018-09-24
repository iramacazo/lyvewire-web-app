import CarouselItem from "../entities/carousel_item";

const carousels = [
    {
        eventSummary: "Hi obama we miss you",
        eventTitle: "The Donald Impeached",
        imageUrl:
            "https://blog.macsales.com/wp-content/uploads/2018/06/Mojave.jpg",
    },
    {
        eventSummary: "Ol lizzy kicked the bucket",
        eventTitle: "Price Philip Coronation",
        imageUrl:
            "https://blog.macsales.com/wp-content/uploads/2018/06/Mojave-Day_preview.jpeg",
    },
    {
        eventSummary: "Grab all the bags you want",
        eventTitle: "Waterfield bankruptcy election",
        imageUrl:
            "https://blog.macsales.com/wp-content/uploads/2018/06/MacBookPro-2018r.jpg",
    },
];

export default class CarouselService {
    public static async get(): Promise<CarouselItem[]> {
        return carousels.map(item => new CarouselItem(item));
    }
}
