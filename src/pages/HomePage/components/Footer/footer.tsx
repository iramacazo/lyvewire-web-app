import * as React from "react";
import { Button, Icon } from "semantic-ui-react";

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
                <div className="footer-team">
                    <div>
                        <Icon inverted={true} name="react" size="large" />
                        <Icon inverted={true} name="node" size="large" />
                        <Icon inverted={true} name="npm" size="large" />
                        <Icon inverted={true} name="github square" size="large" />
                    </div>
                    <p>
                        Jason Deniega, Keith Tan, Oliver Arguelles, Ira Macazo,
                        CL Pagaduan
                    </p>
                </div>
            </div>
        );
    }
}
