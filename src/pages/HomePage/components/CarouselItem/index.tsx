import * as React from "react";
import CarouselItem from "../../../../entities/carousel_item";

interface IPropsType {
    carouselItem: CarouselItem;
}

export default class CarouselItemView extends React.Component<IPropsType> {
    public render() {
        const {
            carouselItem: { imageUrl, eventSummary, eventTitle },
        } = this.props;
        return (
            <div>
                <img src={imageUrl} />
                <h1>{eventTitle}</h1>
                <p>{eventSummary}</p>
            </div>
        );
    }
}
