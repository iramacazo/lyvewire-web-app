import * as React from "react";

interface IPropsType {
    expanded: boolean;
    toggleActive: any;
}

export default class StreamQuestions extends React.Component<IPropsType> {
    public render() {
        return (
            <div className="stream-questions" onClick={this.props.toggleActive}>
                <h3>Questions</h3>
            </div>
        );
    }
}
