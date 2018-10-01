import * as React from "react";
import { Button } from "semantic-ui-react";

interface IPropsType {
    expanded: boolean;
    toggleActive: any;
}

export default class StreamQuestions extends React.Component<IPropsType> {
    public render() {
        return (
            <div className="stream-questions">
                {!this.props.expanded && (
                    <React.Fragment>
                        <h3>Questions</h3>
                        <Button
                            className="toggle-button"
                            onClick={this.props.toggleActive}
                            icon="chevron down"
                            inverted={true}
                            circular={true}
                        />
                    </React.Fragment>
                )}
            </div>
        );
    }
}
