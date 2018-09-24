import CarouselItem from "../entities/carousel_item";
import FetchableState from "../entities/enums/fetchable_state";
import CarouselService from "../service/carousel";
import rootStore from "../store";

export default class CarouselController {
    public static getAll() {
        const { carousel } = rootStore;
        carousel.fetchState = FetchableState.Fetching;
        carousel.fetchError = undefined;

        CarouselService.get()
            .then((ci: CarouselItem[]) => {
                carousel.carouselItems = ci;
                carousel.fetchState = FetchableState.Fetched;
            })
            .catch((e: Error) => {
                carousel.fetchState = FetchableState.Error;
                carousel.fetchError = e.message;
            });
    }
}
