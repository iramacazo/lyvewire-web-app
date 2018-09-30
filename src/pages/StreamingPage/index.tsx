import * as React from "react";
import StreamNavigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import Stream from "./components/Stream";
import "./styles.css";

export default class StreamingPage extends React.Component {
    public render() {
        return (
            <div className="stream-page">
                <StreamNavigation />
                <div className="stream-content">
                    <Stream />
                    <div className="stream-sidebar">
                        <Sidebar />
                    </div>
                </div>
            </div>
        );
    }
}
