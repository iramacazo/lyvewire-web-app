import { Provider } from "mobx-react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import App from "./pages/App";
import registerServiceWorker from "./registerServiceWorker";
import rootStore from "./store";

const app = (
    <Provider {...rootStore}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById("root") as HTMLElement);
registerServiceWorker();
