import * as React from "react";
import { Button, Container, Input, Modal } from "semantic-ui-react";

interface IPropsType {
    toggleContent: any;
}

export default class SignUp extends React.Component<IPropsType> {
    public render() {
        return (
            <Modal.Content>
                <Container>
                    <div className="inputs">
                        <div className="input-div">
                            <h4>Full Name</h4>
                            <Input
                                icon="user"
                                iconPosition="left"
                                placeholder="Full name"
                            />
                        </div>
                        <div className="input-div">
                            <h4>Email</h4>
                            <Input
                                icon="mail"
                                iconPosition="left"
                                placeholder="Email"
                            />
                        </div>
                        <div className="input-div">
                            <h4>Birth Date</h4>
                            <Input
                                icon="calendar outline"
                                iconPosition="left"
                                type="date"
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
                    <Button size="large" color="black" className="sign-button">
                        Create Account
                    </Button>
                </Container>
                <p className="link" onClick={this.props.toggleContent}>
                    I have an account
                </p>
            </Modal.Content>
        );
    }
}
