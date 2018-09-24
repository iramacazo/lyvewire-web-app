import * as React from "react";
import LandingPage from "../LandingPage";
import MenuBar from "./components/menu";
import "./styles.css";
// import StreamingPage from "../StreamingPage";

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <MenuBar />
                <LandingPage />
                {/*
                <HomePage />
                <StreamingPage /> */}
            </div>
        );
    }
}

export default App;
