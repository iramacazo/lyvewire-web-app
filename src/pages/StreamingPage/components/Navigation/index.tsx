import * as React from "react";
import { Menu } from "semantic-ui-react";
import lyvewirelogo from "../../../../assets/images/lyvewire_temp_logo.png";

export default class StreamNavigation extends React.Component {
    public render() {
        return (
            <div>
                <Menu
                    borderless={true}
                    className="stream-navigation"
                    size="massive"
                    inverted={true}
                >
                    <img className="logo" src={lyvewirelogo} />
                    <Menu.Menu position="right">
                        {/* <Menu.Item
                            className="user-sign-in"
                            onClick={this.toggleModal}
                        >
                            Sign In
                        </Menu.Item> */}
                    </Menu.Menu>
                </Menu>
            </div>
        );
    }
}
