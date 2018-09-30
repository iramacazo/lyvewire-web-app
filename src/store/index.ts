import carousel, { CarouselState } from "./carousel";
import streamSidebar, { StreamSidebar } from "./stream_sidebar";

interface IRootStore {
    carousel: CarouselState;
    streamSidebar: StreamSidebar;
}

const rootStore: IRootStore = {
    carousel,
    streamSidebar,
};

if (process.env.NODE_ENV === "development") {
    // tslint:disable-next-line
    window["store"] = rootStore;
}

export default rootStore;
