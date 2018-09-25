import * as React from "react";
import { Modal } from "semantic-ui-react";
import SignIn from "../SignIn/sign_in";
import SignUp from "../SignUp/sign_up";

interface IPropsType {
    isOpen: boolean;
    toggleModal: any;
}

export default class UserModal extends React.Component<IPropsType> {
    public state = {
        activeContent: SignIn,
    };

    public toggleContent = () => {
        switch (this.state.activeContent) {
            case SignUp:
                this.setState({
                    activeContent: SignIn,
                });
                break;

            default:
                this.setState({
                    activeContent: SignUp,
                });
        }
    };

    public render() {
        return (
            <Modal
                className="user-modal"
                open={this.props.isOpen}
                size="tiny"
                onClose={this.props.toggleModal}
            >
                <Modal.Header>
                    {this.state.activeContent === SignIn
                        ? "Sign In"
                        : "Sign Up"}
                </Modal.Header>
                <this.state.activeContent toggleContent={this.toggleContent} />
            </Modal>
        );
    }
}
