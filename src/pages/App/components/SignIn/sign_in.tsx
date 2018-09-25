import * as React from "react";
import { Button, Container, Input, Modal } from "semantic-ui-react";

interface IPropsType {
    toggleContent: any;
}

export default class SignIn extends React.Component<IPropsType> {
    public render() {
        return (
            <Modal.Content>
                <Container>
                    <div className="inputs">
                        <div className="input-div">
                            <h4>Email</h4>
                            <Input
                                icon="mail"
                                iconPosition="left"
                                placeholder="Email"
                            />
                        </div>
                        <div className="input-div">
                            <h4>Password</h4>
                            <Input
                                icon="asterisk"
                                iconPosition="left"
                                type="password"
                                placeholder="Password"
                            />
                        </div>
                    </div>
                    <Button
                        size="large"
                        color="black"
                        className="sign-button"
                    >
                        Sign In
                    </Button>
                </Container>
                <p className="link" onClick={this.props.toggleContent}>
                    Create an account
                </p>
            </Modal.Content>
        );
    }
}
