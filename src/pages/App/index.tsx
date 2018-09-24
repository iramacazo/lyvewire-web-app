import * as React from "react";
// import LandingPage from "../LandingPage";
import HomePage from "../HomePage";
import MenuBar from "./components/Menu/menu";
import "./styles.css";
// import StreamingPage from "../StreamingPage";

class App extends React.Component {
    public render() {
        return <div className="App">
                <MenuBar />
                <HomePage />
                {/* <LandingPage /> */}
            </div>;
    }
}

export default App;
