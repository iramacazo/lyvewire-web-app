import * as React from "react";
import { Menu } from "semantic-ui-react";
import UserModal from "../UserModal/modal";

export default class MenuBar extends React.Component {
    public state = {
        isOpen: false,
    };

    public toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    public render() {
        return (
            <div className="menu-bar">
                <Menu
                    borderless={true}
                    className="navigation-content"
                    size="massive"
                    inverted={true}
                >
                    <Menu.Item className="menu-item">Lyvewire</Menu.Item>
                    <Menu.Menu position="right">
                        <Menu.Item
                            className="menu-item"
                            onClick={this.toggleModal}
                        >
                            Sign In
                        </Menu.Item>
                        <UserModal
                            isOpen={this.state.isOpen}
                            toggleModal={this.toggleModal}
                        />
                    </Menu.Menu>
                </Menu>
            </div>
        );
    }
}
