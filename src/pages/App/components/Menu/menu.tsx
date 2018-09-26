import * as React from "react";
import { Menu } from "semantic-ui-react";
import lyvewirelogo from "../../../../assets/images/lyvewire_temp_logo.png"
import UserModal from "../UserModal/modal";

export default class MenuBar extends React.Component {
    public state = {
        isOpen: false,
    };

    public toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };

    public render() {
        return (
            <div className="menu-bar">
                <Menu
                    borderless={true}
                    className="navigation-content"
                    size="massive"
                    inverted={true}
                >
                    <img className="logo" src={lyvewirelogo}/>
                    <Menu.Menu position="right">
                        <Menu.Item
                            className="user-sign-in"
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
