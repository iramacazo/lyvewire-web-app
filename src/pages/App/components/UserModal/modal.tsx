import * as React from "react";
import { Image, Modal } from "semantic-ui-react";
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
                <div className="modal-logo">
                    <Image src="https://blog.macsales.com/wp-content/uploads/2018/06/Mojave.jpg" />
                </div>
                <this.state.activeContent toggleContent={this.toggleContent} />
            </Modal>
        );
    }
}
