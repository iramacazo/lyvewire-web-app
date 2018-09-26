import * as React from "react";
import { Button, Input, Modal } from "semantic-ui-react";

interface IPropsType {
    toggleContent: any;
}

export default class SignUp extends React.Component<IPropsType> {
    public render() {
        return (
            <Modal.Content>
                <div className="inputs">
                    <h2>Sign Up</h2>
                    <div className="input-div">
                        <h4>Full Name</h4>
                        <Input
                            icon="user"
                            iconPosition="left"
                            placeholder="Full name"
                            size="large"
                        />
                    </div>
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
                        <h4>Birth Date</h4>
                        <Input
                            icon="calendar outline"
                            iconPosition="left"
                            type="date"
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
                    Create Account
                </Button>
                <p className="link" onClick={this.props.toggleContent}>
                    I have an account
                </p>
            </Modal.Content>
        );
    }
}
