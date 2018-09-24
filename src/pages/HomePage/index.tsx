import * as React from "react";
import CarouselController from "../../controller/carousel";
import HomeCarousel from "./components/Carousel/carousel";
import HomeFooter from "./components/Footer/footer";
import "./styles.css";


export default class HomePage extends React.Component {
    public componentDidMount() {
        CarouselController.getAll();
    }

    public render() {
        return (
            <div>
                <HomeCarousel />
                <HomeFooter />
            </div>
        );
    }
}
