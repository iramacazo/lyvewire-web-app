import * as React from "react";
import HomeCarousel from "./components/carousel";
import HomeFooter from "./components/footer";
import "./styles.css";

export default class HomePage extends React.Component {
    public render() {
        return (
            <div>
                <HomeCarousel />
                <HomeFooter />
            </div>
        );
    }
}
