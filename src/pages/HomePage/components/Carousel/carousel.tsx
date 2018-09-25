import { inject, observer } from "mobx-react";
import * as React from "react";
import { Icon } from "semantic-ui-react";
import FetchableState from "../../../../entities/enums/fetchable_state";
import { CarouselState } from "../../../../store/carousel";
import CarouselItemView from "../CarouselItem";

interface IPropsType {
    carousel?: CarouselState;
}

interface IStateType {
    activeIndex: number;
}

const MOVE_CAROUSEL_MILISECONDS = 8_000;

@inject("carousel")
@observer
export default class HomeCarousel extends React.Component<
    IPropsType,
    IStateType
> {
    public state = {
        activeIndex: 0,
    };

    public componentDidMount() {
        setInterval(this.moveCarousel, MOVE_CAROUSEL_MILISECONDS);
    }

    public moveCarousel = () => {
        const { carousel } = this.props;
        const { activeIndex } = this.state;
        const carouselItems = carousel!.carouselItems!;
        const newIndex = (activeIndex + 1) % carouselItems.length;
        this.setState({ activeIndex: newIndex });
    };

    public render() {
        const { activeIndex } = this.state;
        const { carousel } = this.props;

        if (carousel!.fetchState !== FetchableState.Fetched) {
            return <h1>Loading carousel...</h1>;
        }

        const activeItem = carousel!.carouselItems![activeIndex];

        return (
            <div className="carousel">
                <div className="carousel-arrow left">
                    <Icon size="huge" inverted={true} name="arrow left" />
                </div>
                <div className="carousel-arrow right">
                    <Icon size="huge" inverted={true} name="arrow right" />
                </div>
                <CarouselItemView carouselItem={activeItem} />
            </div>
        );
    }
}
