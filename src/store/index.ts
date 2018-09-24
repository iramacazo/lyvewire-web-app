import carousel, { CarouselState } from "./carousel";

interface IRootStore {
    carousel: CarouselState;
}

const rootStore: IRootStore = {
    carousel,
};

export default rootStore;
