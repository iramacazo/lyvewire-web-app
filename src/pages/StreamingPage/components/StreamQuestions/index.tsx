import * as React from "react";
import { Button, Feed, Input } from "semantic-ui-react";
import Question from "./components/Question";

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

                {this.props.expanded && (
                    <React.Fragment>
                        <h3>Questions</h3>
                        <Feed>
                            <Question likes={5} question="How do I get rid of my pimples"/>
                            <Question likes={4} question="What's your favourite food?"/>
                            <Question likes={3} question="What's your favourite beverage?"/>
                            <Question likes={2} question="How do I learn how to develop?"/>
                            <Question likes={1} question="When do I become a millionaire?"/>
                        </Feed>
                        <div className="question-input">
                            <Input placeholder="Type in question..." />
                        </div>
                    </React.Fragment>
                )}
            </div>
        );
    }
}
