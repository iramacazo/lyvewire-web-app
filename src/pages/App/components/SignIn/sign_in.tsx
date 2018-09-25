import * as React from "react";
import { Modal } from "semantic-ui-react";

interface IPropsType {
    toggleContent: any;
}

export default class SignIn extends React.Component<IPropsType> {
    public render() {
        return (
            <Modal.Content>
                <p className="link" onClick={this.props.toggleContent}>
                    Create an account
                </p>
            </Modal.Content>
        );
    }
}
