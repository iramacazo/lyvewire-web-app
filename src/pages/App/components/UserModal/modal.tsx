import * as React from "react";
import { Modal } from "semantic-ui-react";

interface IPropsType {
    isOpen: boolean;
    toggleModal: any;
}

export default class UserModal extends React.Component<IPropsType> {
    public render() {
        return (
            <div className="user-modal">
                <Modal open={this.props.isOpen} size="small" onClose={this.props.toggleModal}>
                    Something
                </Modal>
            </div>
        );
    }
}