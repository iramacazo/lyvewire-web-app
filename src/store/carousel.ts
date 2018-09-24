import { observable } from "mobx";
import CarouselItem from "../entities/carousel_item";
import FetchableState from "../entities/enums/fetchable_state";
import IFetchable from "../interfaces/fetchable";

export class CarouselState implements IFetchable {
    @observable
    public fetchState: FetchableState = FetchableState.Unfetched;

    @observable
    public fetchError?: string = undefined;

    @observable
    public carouselItems?: CarouselItem[] = undefined;
}

export default new CarouselState();