import * as React from "react";
import { Button } from "semantic-ui-react";
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
            <div className="carousel">
                <div className="event-cover">
                    <div className="event-text">
                        <h1 className="event-title">{eventTitle}</h1>
                        <p>{eventSummary}</p>
                    </div>
                    <div className="event-buttons">
                        <Button inverted={true} size="large">View Details</Button>
                        <Button inverted={true} size="large">Watch Event</Button>
                    </div>
                </div>
                <img src={imageUrl} className="carousel-image" />
            </div>
        );
    }
}
