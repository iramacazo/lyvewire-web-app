import * as React from "react";
import { Button } from "semantic-ui-react";

export default class HomeFooter extends React.Component {
    public render() {
        return (
            <div className="footer">
                <h1>We're lyve for the first time.</h1>
                <div className="footer-buttons">
                    <Button inverted={true}>Join our team</Button>
                    <Button inverted={true}>Go lyve</Button>
                    <Button inverted={true}>Submit feedback</Button>
                </div>
            </div>
        );
    }
}
