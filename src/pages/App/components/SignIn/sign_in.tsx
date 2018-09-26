import * as React from "react";
import { Button, Input, Modal } from "semantic-ui-react";

interface IPropsType {
    toggleContent: any;
}

export default class SignIn extends React.Component<IPropsType> {
    public render() {
        return (
            <Modal.Content>
                <div className="inputs">
                    <h2>Sign In</h2>
                    <div className="input-div">
                        <h4>Email</h4>
                        <Input
                            icon="mail"
                            iconPosition="left"
                            placeholder="Email"
                            size="large"
                        />
                    </div>
                    <div className="input-div">
                        <h4>Password</h4>
                        <Input
                            icon="asterisk"
                            iconPosition="left"
                            type="password"
                            placeholder="Password"
                            size="large"
                        />
                    </div>
                </div>
                <Button size="large" color="black" className="sign-button">
                    Sign In
                </Button>
                <p className="link" onClick={this.props.toggleContent}>
                    Create an account
                </p>
            </Modal.Content>
        );
    }
}
